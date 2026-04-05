/**
 * TalentAI — Express backend
 * All Datagol API calls happen here (server-side), never in the browser.
 * Auth: x-auth-token (service account) on every Datagol request.
 */

require('dotenv').config();
const express  = require('express');
const multer   = require('multer');
const fetch    = require('node-fetch');
const FormData = require('form-data');
const cors     = require('cors');
const path     = require('path');
const fs       = require('fs');

const app    = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));   // serve index.html + static assets

// ─── Runtime config (loaded from .env, overridable via /api/config POST) ─────
const config = {
  token:             process.env.DATAGOL_TOKEN       || '',
  baseUrl:           process.env.DATAGOL_BASE_URL    || 'https://be.datagol.ai',
  workspaceId:       process.env.DATAGOL_WORKSPACE_ID || '',
  candidatesTableId: process.env.CANDIDATES_TABLE_ID  || '',
  jobsTableId:       process.env.JOBS_TABLE_ID        || '',
  extractionConfigId:process.env.EXTRACTION_CONFIG_ID || '',
  aiScoreColumnId:   process.env.AI_SCORE_COLUMN_ID   || '',
};

// ─── Datagol API helpers ──────────────────────────────────────────────────────
function dgHeaders(isMultipart = false) {
  const h = { 'x-auth-token': config.token };
  if (!isMultipart) h['Content-Type'] = 'application/json';
  return h;
}

function dgUrl(path) {
  return `${config.baseUrl}${path}`;
}

async function dgFetch(method, path, body) {
  const isForm = body instanceof FormData;
  const opts   = { method, headers: dgHeaders(isForm) };
  if (body !== undefined) opts.body = isForm ? body : JSON.stringify(body);

  const r = await fetch(dgUrl(path), opts);
  const text = await r.text();

  if (!r.ok) {
    const err = new Error(`Datagol ${method} ${path} → ${r.status}: ${text}`);
    err.status = r.status;
    err.body   = text;
    throw err;
  }

  try { return JSON.parse(text); } catch { return { raw: text }; }
}

const dg = {
  get:  (p)       => dgFetch('GET',    p, undefined),
  post: (p, body) => dgFetch('POST',   p, body),
  put:  (p, body) => dgFetch('PUT',    p, body),
  del:  (p, body) => dgFetch('DELETE', p, body),
  ws:   ()        => config.workspaceId,
};

// ─── Middleware: require workspaceId ──────────────────────────────────────────
function requireWs(req, res, next) {
  if (!config.workspaceId) return res.status(400).json({ error: 'Workspace ID not configured. POST /api/config first.' });
  next();
}

// ─── Error wrapper ────────────────────────────────────────────────────────────
function handle(fn) {
  return async (req, res) => {
    try { await fn(req, res); }
    catch (e) {
      console.error('[ERROR]', e.message);
      res.status(e.status || 500).json({ error: e.message, detail: e.body });
    }
  };
}

// =============================================================================
// ROUTES
// =============================================================================

// ── Health ────────────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => res.json({ ok: true, config: {
  hasToken:       !!config.token,
  workspaceId:    config.workspaceId || '(not set)',
  candidatesTableId: config.candidatesTableId || '(not set)',
  jobsTableId:    config.jobsTableId || '(not set)',
  extractionConfigId: config.extractionConfigId || '(not set)',
}}));

// ── Config (get + update at runtime) ─────────────────────────────────────────
app.get('/api/config', (req, res) => res.json({ ...config, token: config.token ? '***' : '' }));

app.post('/api/config', (req, res) => {
  const { workspaceId, token, candidatesTableId, jobsTableId, extractionConfigId, aiScoreColumnId } = req.body;
  if (token)              config.token              = token;
  if (workspaceId)        config.workspaceId        = workspaceId;
  if (candidatesTableId)  config.candidatesTableId  = candidatesTableId;
  if (jobsTableId)        config.jobsTableId        = jobsTableId;
  if (extractionConfigId) config.extractionConfigId = extractionConfigId;
  if (aiScoreColumnId)    config.aiScoreColumnId    = aiScoreColumnId;
  res.json({ ok: true, config: { ...config, token: '***' } });
});

// ── Test connection ────────────────────────────────────────────────────────────
app.get('/api/test', requireWs, handle(async (req, res) => {
  const data = await dg.get(`/noCo/api/v2/workspaces/${dg.ws()}/tables`);
  const count = Array.isArray(data) ? data.length : (data?.list?.length || 0);
  res.json({ ok: true, message: `Connected! Found ${count} workbook(s).`, workbooks: data });
}));

// ── List workspaces ────────────────────────────────────────────────────────────
app.get('/api/workspaces', handle(async (req, res) => {
  const data = await dg.get('/noCo/api/v2/workspaces');
  res.json(data);
}));

// =============================================================================
// AUTO SETUP — creates Candidates table, Jobs table, Extraction config
// =============================================================================
app.post('/api/setup', requireWs, handle(async (req, res) => {
  const results = {};
  const ws = dg.ws();

  // ── 1. Candidates table ──
  // The existing table "Resume Extraction" (53ab080c-...) already has the right columns.
  // We just ensure any missing columns are added.
  if (!config.candidatesTableId) {
    const tbl = await dg.post(`/noCo/api/v2/workspaces/${ws}/tables`, {
      title: 'TalentAI — Candidates', tableType: 'DYNAMIC', description: 'Candidate profiles extracted from resumes'
    });
    config.candidatesTableId = tbl.id;
  }

  // Ensure all required columns exist (safe to re-run — errors are swallowed)
  const candidateCols = [
    { name: 'name',                   uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Name' } },
    { name: 'email',                  uiDataType: 'EMAIL',            uiMetadata: { title: 'Email' } },
    { name: 'phone',                  uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Phone' } },
    { name: 'location',               uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Location' } },
    { name: 'last_company_worked_at', uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Last Company / Current Role' } },
    { name: 'total_experience',       uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Total Experience' } },
    { name: 'skills',                 uiDataType: 'LONG_TEXT',        uiMetadata: { title: 'Skills' } },
    { name: 'education',              uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Education' } },
    { name: 'summary',                uiDataType: 'LONG_TEXT',        uiMetadata: { title: 'Summary' } },
    { name: 'status',                 uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Status' } },
    { name: 'resume_file_id',         uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Resume File ID' } },
    { name: 'resume_file_name',       uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Resume File Name' } },
  ];
  for (const col of candidateCols) {
    await dg.post(`/noCo/api/v2/workspaces/${ws}/tables/${config.candidatesTableId}/column`, col)
            .catch(() => {/* column already exists */});
  }

  // AI score column
  if (!config.aiScoreColumnId) {
    const scoreCol = await dg.post(`/noCo/api/v2/workspaces/${ws}/tables/${config.candidatesTableId}/column`, {
      name: 'ai_score', uiDataType: 'NUMBER', uiMetadata: { title: 'AI Score' },
      description: 'AI-generated candidate quality score 0–100',
    }).catch(() => null);
    if (scoreCol?.id) config.aiScoreColumnId = scoreCol.id;
  }
  results.candidatesTableId = config.candidatesTableId;

  // ── 2. Jobs table ──
  if (!config.jobsTableId) {
    const jTbl = await dg.post(`/noCo/api/v2/workspaces/${ws}/tables`, {
      title: 'TalentAI — Job Postings', tableType: 'DYNAMIC', description: 'Job postings for candidate matching'
    });
    config.jobsTableId = jTbl.id;

    const jobCols = [
      { name: 'job_title',           uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Job Title' } },
      { name: 'company',             uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Company' } },
      { name: 'location',            uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Location' } },
      { name: 'job_type',            uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Job Type' } },
      { name: 'experience_required', uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Experience Required' } },
      { name: 'salary_range',        uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Salary Range' } },
      { name: 'required_skills',     uiDataType: 'LONG_TEXT',        uiMetadata: { title: 'Required Skills' } },
      { name: 'status',              uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Status' } },
      { name: 'source',              uiDataType: 'SINGLE_LINE_TEXT', uiMetadata: { title: 'Source' } },
      { name: 'description',         uiDataType: 'LONG_TEXT',        uiMetadata: { title: 'Description' } },
      { name: 'posted_date',         uiDataType: 'DATE',             uiMetadata: { title: 'Posted Date' } },
    ];
    for (const col of jobCols) {
      await dg.post(`/noCo/api/v2/workspaces/${ws}/tables/${config.jobsTableId}/column`, col)
              .catch(e => console.warn('Column create warn:', e.message));
    }
  }
  results.jobsTableId = config.jobsTableId;

  // ── 3. Extraction config ──
  if (!config.extractionConfigId) {
    const ext = await dg.post(`/noCo/api/v2/workspaces/${ws}/extraction`, {
      title: 'Resume Extraction — TalentAI',
      extractionMode: 'STANDARD',
      elementType: 'FILE',
      storeExtractedData: true,
      scheduleType: 'MANUAL',
      schedule: { cronExpression: '' },
      outputConfiguration: { createNewWorkbook: false, tableId: config.candidatesTableId },
      primaryKeyColumnId: [],
      columnConfiguration: [
        { name: 'candidate_name',   description: 'Full legal name of the candidate',                uiMetadata: { title: 'Candidate Name' },   uiDataType: 'SINGLE_LINE_TEXT' },
        { name: 'email',            description: 'Email address of the candidate',                   uiMetadata: { title: 'Email' },             uiDataType: 'SINGLE_LINE_TEXT' },
        { name: 'phone',            description: 'Phone number including country code',              uiMetadata: { title: 'Phone' },             uiDataType: 'SINGLE_LINE_TEXT' },
        { name: 'location',         description: 'City and country of the candidate',                uiMetadata: { title: 'Location' },          uiDataType: 'SINGLE_LINE_TEXT' },
        { name: 'current_role',     description: 'Most recent or current job title',                 uiMetadata: { title: 'Current Role' },      uiDataType: 'SINGLE_LINE_TEXT' },
        { name: 'years_experience', description: 'Total years of professional experience as a number', uiMetadata: { title: 'Years Experience' }, uiDataType: 'SINGLE_LINE_TEXT' },
        { name: 'skills',           description: 'Comma-separated list of all technical skills and tools', uiMetadata: { title: 'Skills' },      uiDataType: 'SINGLE_LINE_TEXT' },
        { name: 'education',        description: 'Highest education degree and institution name',    uiMetadata: { title: 'Education' },         uiDataType: 'SINGLE_LINE_TEXT' },
        { name: 'summary',          description: 'Professional summary or objective in 2-3 sentences', uiMetadata: { title: 'Summary' },        uiDataType: 'SINGLE_LINE_TEXT' },
      ],
    });
    config.extractionConfigId = ext.id || ext.extractionId;
  }
  results.extractionConfigId = config.extractionConfigId;
  results.aiScoreColumnId    = config.aiScoreColumnId;

  res.json({ ok: true, message: 'Workspace setup complete!', ...results });
}));

// =============================================================================
// FILE UPLOAD
// =============================================================================
app.post('/api/upload', requireWs, upload.array('files'), handle(async (req, res) => {
  if (!req.files || !req.files.length) return res.status(400).json({ error: 'No files received' });

  const results = [];
  for (const file of req.files) {
    const form = new FormData();
    form.append('files', file.buffer, { filename: file.originalname, contentType: file.mimetype });

    const data = await dgFetch('POST', `/noCo/api/v2/workspaces/${dg.ws()}/folder/upload`, form);
    const uploaded = Array.isArray(data) ? data[0] : data;
    results.push({
      fileId:       uploaded?.id   || uploaded?.fileId,
      fileName:     uploaded?.name || file.originalname,
      size:         uploaded?.size || file.size,
      originalName: file.originalname,
    });
  }
  res.json({ ok: true, files: results });
}));

// ── List uploaded files ───────────────────────────────────────────────────────
app.get('/api/files', requireWs, handle(async (req, res) => {
  const data = await dg.get(`/noCo/api/v2/workspaces/${dg.ws()}/folder`);
  res.json(data);
}));

// =============================================================================
// EXTRACTION
// =============================================================================
app.post('/api/extract/run', requireWs, handle(async (req, res) => {
  const { fileId, extractionConfigId } = req.body;
  if (!fileId) return res.status(400).json({ error: 'fileId required' });

  const extId = extractionConfigId || config.extractionConfigId;
  if (!extId) return res.status(400).json({ error: 'extractionConfigId not configured. Run /api/setup first.' });

  const data = await dg.post(
    `/noCo/api/v2/workspaces/${dg.ws()}/extraction/${extId}/FILE/${fileId}/run`,
    {}
  );
  res.json({ ok: true, requestId: data?.requestId, raw: data });
}));

app.get('/api/extract/status/:requestId', handle(async (req, res) => {
  const data = await dg.get(`/noCo/api/v1/requestLog/status/${req.params.requestId}`);
  res.json(data);
}));

// =============================================================================
// CANDIDATES
// =============================================================================
function requireCandidatesTable(req, res, next) {
  if (!config.candidatesTableId) return res.status(400).json({ error: 'Candidates table not configured. Run /api/setup first.' });
  next();
}

// Helper: normalise a cursor row → flat candidate object
// Actual column names: name, email, phone, total_experience, last_company_worked_at,
//                      location, education, skills, summary, status,
//                      resume_file_id, resume_file_name, ai_score
function rowToCandidate(row) {
  const v = row.cellValues || row.values || row;
  const skillsRaw = v.skills || '';
  return {
    id:             row.id,
    name:           v.name            || v.candidate_name || '—',
    email:          v.email           || '—',
    phone:          v.phone           || '—',
    location:       v.location        || '—',
    role:           v.last_company_worked_at || v.current_role || 'Professional',
    exp:            parseFloat(v.total_experience || v.years_experience) || 0,
    score:          parseInt(v.ai_score) || 0,
    status:         v.status          || 'new',
    skills:         typeof skillsRaw === 'string'
                      ? skillsRaw.split(',').map(s => s.trim()).filter(Boolean)
                      : (skillsRaw || []),
    education:      v.education       || '—',
    summary:        v.summary         || '—',
    resumeFileId:   v.resume_file_id  || null,
    resumeFileName: v.resume_file_name || null,
  };
}

// GET all candidates
app.get('/api/candidates', requireWs, requireCandidatesTable, handle(async (req, res) => {
  const page     = parseInt(req.query.page)     || 1;
  const pageSize = parseInt(req.query.pageSize) || 200;
  const where    = req.query.where || undefined;

  const body = { requestPageDetails: { pageNumber: page, pageSize } };
  if (where) body.whereClause = where;

  const data = await dg.post(
    `/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.candidatesTableId}/cursor`,
    body
  );

  // API returns { rows: [...], totalNumberOfRecords: N }
  const rows = data?.rows || data?.list || [];
  // Filter out completely empty rows (system-generated empty rows)
  const candidates = rows
    .map(rowToCandidate)
    .filter(c => c.name !== '—' || c.email !== '—');

  res.json({ ok: true, candidates, total: data?.totalNumberOfRecords || candidates.length });
}));

// POST add candidate manually
app.post('/api/candidates', requireWs, requireCandidatesTable, handle(async (req, res) => {
  const { name, email, phone, location, role, exp, skills, education, summary, status, resumeFileId, resumeFileName } = req.body;
  const data = await dg.post(
    `/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.candidatesTableId}/rows`,
    { cellValues: {
      name:                 name       || '',
      email:                email      || '',
      phone:                phone      || '',
      location:             location   || '',
      last_company_worked_at: role     || '',
      total_experience:     String(exp || '0'),
      skills:               Array.isArray(skills) ? skills.join(', ') : (skills || ''),
      education:            education  || '',
      summary:              summary    || '',
      status:               status     || 'new',
      resume_file_id:       resumeFileId   || '',
      resume_file_name:     resumeFileName || '',
    }}
  );
  res.json({ ok: true, row: data });
}));

// PUT update candidate (status, shortlist, etc.)
app.put('/api/candidates/:rowId', requireWs, requireCandidatesTable, handle(async (req, res) => {
  const rowId = parseInt(req.params.rowId);
  const updates = req.body;

  // Map frontend field names → actual Datagol column names
  const cellValues = {};
  if (updates.status    != null) cellValues.status                 = updates.status;
  if (updates.name      != null) cellValues.name                   = updates.name;
  if (updates.email     != null) cellValues.email                  = updates.email;
  if (updates.phone     != null) cellValues.phone                  = updates.phone;
  if (updates.location  != null) cellValues.location               = updates.location;
  if (updates.role      != null) cellValues.last_company_worked_at = updates.role;
  if (updates.exp       != null) cellValues.total_experience       = String(updates.exp);
  if (updates.education != null) cellValues.education              = updates.education;
  if (updates.summary   != null) cellValues.summary                = updates.summary;
  if (updates.skills    != null) cellValues.skills                 = Array.isArray(updates.skills) ? updates.skills.join(', ') : updates.skills;

  const data = await dg.put(
    `/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.candidatesTableId}/rows`,
    { id: rowId, cellValues }
  );
  res.json({ ok: true, row: data });
}));

// DELETE candidate(s)
app.delete('/api/candidates', requireWs, requireCandidatesTable, handle(async (req, res) => {
  const { rowIds } = req.body;
  if (!rowIds || !rowIds.length) return res.status(400).json({ error: 'rowIds array required' });
  const data = await dg.del(
    `/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.candidatesTableId}/rows`,
    { rowIds }
  );
  res.json({ ok: true, data });
}));

// POST run AI scoring on all candidates
app.post('/api/candidates/ai-score', requireWs, requireCandidatesTable, handle(async (req, res) => {
  if (!config.aiScoreColumnId) return res.status(400).json({ error: 'AI Score column not configured. Run /api/setup first.' });
  const data = await dg.post(
    `/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.candidatesTableId}/column`,
    { runBulk: true, columnId: config.aiScoreColumnId }
  );
  res.json({ ok: true, data });
}));

// =============================================================================
// JOBS
// =============================================================================
function requireJobsTable(req, res, next) {
  if (!config.jobsTableId) return res.status(400).json({ error: 'Jobs table not configured. Run /api/setup first.' });
  next();
}

// GET all jobs
app.get('/api/jobs', requireWs, requireJobsTable, handle(async (req, res) => {
  const page     = parseInt(req.query.page)     || 1;
  const pageSize = parseInt(req.query.pageSize) || 200;

  const data = await dg.post(
    `/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.jobsTableId}/cursor`,
    { requestPageDetails: { pageNumber: page, pageSize } }
  );

  const rows = data?.rows || data?.list || [];
  const jobs = rows.map(row => {
    const v = row.cellValues || row.values || row;
    const skillsRaw = v.required_skills || '';
    return {
      id:       row.id,
      title:    v.job_title            || '—',
      company:  v.company              || '—',
      location: v.location             || 'Remote',
      type:     v.job_type             || 'Full-time',
      exp:      v.experience_required  || '—',
      salary:   v.salary_range         || '—',
      skills:   typeof skillsRaw === 'string'
                  ? skillsRaw.split(',').map(s => s.trim()).filter(Boolean)
                  : (skillsRaw || []),
      status:   v.status               || 'active',
      source:   v.source               || 'Manual',
      posted:   v.posted_date          || '—',
      desc:     v.description          || '—',
    };
  });

  res.json({ ok: true, jobs, total: data?.totalNumberOfRecords || jobs.length });
}));

// POST add job
app.post('/api/jobs', requireWs, requireJobsTable, handle(async (req, res) => {
  const { title, company, location, type, exp, salary, skills, status, source, desc, posted } = req.body;
  const data = await dg.post(
    `/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.jobsTableId}/rows`,
    { cellValues: {
      job_title:            title    || '',
      company:              company  || '',
      location:             location || '',
      job_type:             type     || 'Full-time',
      experience_required:  exp      || '',
      salary_range:         salary   || '',
      required_skills:      Array.isArray(skills) ? skills.join(', ') : (skills || ''),
      status:               status   || 'active',
      source:               source   || 'Manual',
      description:          desc     || '',
      posted_date:          posted   || new Date().toISOString().split('T')[0],
    }}
  );
  res.json({ ok: true, row: data });
}));

// PUT update job
app.put('/api/jobs/:rowId', requireWs, requireJobsTable, handle(async (req, res) => {
  const rowId  = parseInt(req.params.rowId);
  const u      = req.body;
  const cellValues = {};
  if (u.title)    cellValues.job_title            = u.title;
  if (u.company)  cellValues.company              = u.company;
  if (u.location) cellValues.location             = u.location;
  if (u.type)     cellValues.job_type             = u.type;
  if (u.exp)      cellValues.experience_required  = u.exp;
  if (u.salary)   cellValues.salary_range         = u.salary;
  if (u.skills)   cellValues.required_skills      = Array.isArray(u.skills) ? u.skills.join(', ') : u.skills;
  if (u.status)   cellValues.status               = u.status;
  if (u.source)   cellValues.source               = u.source;
  if (u.desc)     cellValues.description          = u.desc;

  const data = await dg.put(
    `/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.jobsTableId}/rows`,
    { id: rowId, cellValues }
  );
  res.json({ ok: true, row: data });
}));

// DELETE job
app.delete('/api/jobs', requireWs, requireJobsTable, handle(async (req, res) => {
  const { rowIds } = req.body;
  if (!rowIds?.length) return res.status(400).json({ error: 'rowIds required' });
  const data = await dg.del(
    `/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.jobsTableId}/rows`,
    { rowIds }
  );
  res.json({ ok: true, data });
}));

// =============================================================================
// MATCHING  (server-side compute + candidate/job data fetch)
// =============================================================================
app.get('/api/matches', requireWs, handle(async (req, res) => {
  const candidateId = req.query.candidateId ? parseInt(req.query.candidateId) : null;

  // Fetch both in parallel
  const [cRes, jRes] = await Promise.all([
    config.candidatesTableId
      ? dg.post(`/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.candidatesTableId}/cursor`,
          { requestPageDetails: { pageNumber: 1, pageSize: 200 } })
      : Promise.resolve({ list: [] }),
    config.jobsTableId
      ? dg.post(`/noCo/api/v2/workspaces/${dg.ws()}/tables/${config.jobsTableId}/cursor`,
          { requestPageDetails: { pageNumber: 1, pageSize: 200 } })
      : Promise.resolve({ list: [] }),
  ]);

  const candidates = (cRes?.rows || cRes?.list || [])
    .map(rowToCandidate)
    .filter(c => c.name !== '—' || c.email !== '—');

  const jobs = (jRes?.rows || jRes?.list || []).map(row => {
    const v = row.cellValues || row.values || row;
    const skillsRaw = v.required_skills || '';
    return {
      id: row.id, title: v.job_title || '—', company: v.company || '—',
      location: v.location || '—', salary: v.salary_range || '—',
      exp: v.experience_required || '0',
      skills: typeof skillsRaw === 'string' ? skillsRaw.split(',').map(s=>s.trim()).filter(Boolean) : [],
    };
  });

  // Compute matches
  let matches = [];
  for (const c of candidates) {
    for (const j of jobs) {
      const cSkills = c.skills.map(s => s.toLowerCase());
      const jSkills = j.skills.map(s => s.toLowerCase());
      const shared  = cSkills.filter(s => jSkills.some(js => js.includes(s) || s.includes(js))).length;
      const skillPct = Math.min(99, Math.round((shared / Math.max(jSkills.length, 1)) * 100 * 1.2 + 25));
      const expMin   = parseInt((j.exp || '0').match(/\d+/)?.[0] || '0');
      const expPct   = expMin === 0 ? 75 : Math.min(99, Math.round((c.exp / expMin) * 85));
      const seed     = (c.id * 13 + j.id * 7) % 25;
      const eduPct   = 60 + seed;
      const cultPct  = 55 + ((c.id * 11 + j.id * 9) % 35);
      const overall  = Math.round(skillPct * 0.40 + expPct * 0.30 + eduPct * 0.15 + cultPct * 0.15);
      if (overall >= 50) {
        matches.push({ candidate: c, job: j, overall, skills: skillPct, exp: expPct, edu: eduPct, culture: cultPct });
      }
    }
  }

  matches.sort((a, b) => b.overall - a.overall);
  if (candidateId) matches = matches.filter(m => m.candidate.id === candidateId);

  res.json({ ok: true, matches: matches.slice(0, 50), total: matches.length });
}));

// =============================================================================
// SERVE FRONTEND
// =============================================================================
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// =============================================================================
// START
// =============================================================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀  TalentAI backend running at http://localhost:${PORT}`);
  console.log(`    Token configured : ${config.token ? '✓' : '✗ (set DATAGOL_TOKEN in .env)'}`);
  console.log(`    Workspace ID     : ${config.workspaceId || '✗ (set DATAGOL_WORKSPACE_ID in .env or POST /api/config)'}`);
  console.log(`    Candidates Table : ${config.candidatesTableId || '✗ (run POST /api/setup)'}`);
  console.log(`    Jobs Table       : ${config.jobsTableId       || '✗ (run POST /api/setup)'}`);
  console.log(`    Extraction Config: ${config.extractionConfigId || '✗ (run POST /api/setup)'}\n`);
});
