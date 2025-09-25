#!/usr/bin/env node

/**
 * Script to create a new release notes document
 * Usage: node create-release-notes.js <version> <type> [date] [year] [month]
 * Example: node create-release-notes.js 1.77.0 minor 2025-10-15 2025 10
 */

const fs = require('fs');
const path = require('path');

function createReleaseNotes(version, type, date = new Date().toISOString().split('T')[0], year = new Date().getFullYear(), month = String(new Date().getMonth() + 1).padStart(2, '0')) {
  // Validate inputs
  if (!version || !type) {
    console.error('Usage: node create-release-notes.js <version> <type> [date] [year] [month]');
    console.error('Example: node create-release-notes.js 1.77.0 minor 2025-10-15 2025 10');
    process.exit(1);
  }

  if (!['major', 'minor', 'patch'].includes(type)) {
    console.error('Type must be one of: major, minor, patch');
    process.exit(1);
  }

  // Create directory structure if it doesn't exist
  const releaseDir = path.join(__dirname, 'docs', 'release-notes', year, month);
  if (!fs.existsSync(releaseDir)) {
    fs.mkdirSync(releaseDir, { recursive: true });
    console.log(`📁 Created directory: ${releaseDir}`);
  }

  // Create _category_.json if it doesn't exist
  const categoryFile = path.join(releaseDir, '_category_.json');
  if (!fs.existsSync(categoryFile)) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    const categoryContent = {
      label: `${monthNames[parseInt(month) - 1]} ${year}`,
      position: parseInt(month)
    };
    fs.writeFileSync(categoryFile, JSON.stringify(categoryContent, null, 2));
    console.log(`📄 Created category file: ${categoryFile}`);
  }

  // Create filename
  const filename = `v${version}-${type}-release.mdx`;
  const filepath = path.join(releaseDir, filename);

  // Read template
  const templatePath = path.join(__dirname, 'release-template.mdx');
  let template = fs.readFileSync(templatePath, 'utf8');

  // Get next position number
  const existingFiles = fs.readdirSync(releaseDir).filter(f => f.endsWith('.mdx'));
  const nextPosition = existingFiles.length + 1;

  // Replace placeholders
  template = template
    .replace(/{version}/g, version)
    .replace(/{type}/g, type)
    .replace(/{release_date}/g, date)
    .replace(/{position}/g, nextPosition)
    .replace(/{total_changes}/g, 'TBD')
    .replace(/{summary}/g, 'various improvements and bug fixes')
    .replace(/{new_features}/g, 'TBD')
    .replace(/{bug_fixes}/g, 'TBD')
    .replace(/{performance_improvements}/g, 'TBD')
    .replace(/{security_updates}/g, 'TBD')
    .replace(/{api_version}/g, '2');

  // Write file
  fs.writeFileSync(filepath, template);

  console.log(`✅ Created release notes: ${filepath}`);
  console.log(`📁 Location: docs/release-notes/${year}/${month}/${filename}`);
  console.log(`🔗 URL: /docs/release-notes/${year}/${month}/${filename.replace('.mdx', '')}`);
  console.log(`📝 Edit the file to add your release content`);
}

// Get command line arguments
const [,, version, type, date, year, month] = process.argv;
createReleaseNotes(version, type, date, year, month);
