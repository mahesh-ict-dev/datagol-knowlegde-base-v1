const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = './build/pdfs';
const TEMP_DIR = './temp-html';
const DOCS_TO_GENERATE = [
  {
    url: '/docs/intro',
    filename: 'DataGOL-Introduction.pdf',
    title: 'DataGOL Documentation - Introduction'
  },
  {
    url: '/docs/datagol-concepts',
    filename: 'DataGOL-Concepts.pdf',
    title: 'DataGOL Documentation - Concepts'
  },
  {
    url: '/docs/Lakehouse/about-lakehouse',
    filename: 'DataGOL-Lakehouse.pdf',
    title: 'DataGOL Documentation - Lakehouse'
  },
  {
    url: '/docs/AI Agents/about-ai-agent',
    filename: 'DataGOL-AI-Agents.pdf',
    title: 'DataGOL Documentation - AI Agents'
  },
  {
    url: '/docs/BI Analytics/bi-workbook',
    filename: 'DataGOL-BI-Analytics.pdf',
    title: 'DataGOL Documentation - BI Analytics'
  },
  {
    url: '/docs/Workbooks/about-workbook',
    filename: 'DataGOL-Workbooks.pdf',
    title: 'DataGOL Documentation - Workbooks'
  },
  {
    url: '/docs/Reference guides/roles-and-permissions',
    filename: 'DataGOL-Reference-Guides.pdf',
    title: 'DataGOL Documentation - Reference Guides'
  },
  {
    url: '/docs/best-practices',
    filename: 'DataGOL-Best-Practices.pdf',
    title: 'DataGOL Documentation - Best Practices'
  },
  {
    url: '/docs/faqs',
    filename: 'DataGOL-FAQs.pdf',
    title: 'DataGOL Documentation - FAQs'
  }
];

// Enhanced CSS for better PDF styling
const PDF_CSS = `
@page {
  size: A4;
  margin: 2cm 1.5cm;
  @top-center {
    content: "DataGOL Documentation";
    font-size: 10pt;
    color: #666;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5pt;
  }
  @bottom-center {
    content: "Page " counter(page) " of " counter(pages);
    font-size: 10pt;
    color: #666;
    border-top: 1px solid #ddd;
    padding-top: 5pt;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  font-size: 11pt;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  color: #2e8555;
  page-break-after: avoid;
  margin-top: 0;
}

h1 {
  font-size: 20pt;
  margin-bottom: 20pt;
  page-break-before: always;
  border-bottom: 2px solid #2e8555;
  padding-bottom: 10pt;
}

h2 {
  font-size: 16pt;
  margin-top: 25pt;
  margin-bottom: 15pt;
}

h3 {
  font-size: 14pt;
  margin-top: 20pt;
  margin-bottom: 10pt;
}

h4 {
  font-size: 12pt;
  margin-top: 15pt;
  margin-bottom: 8pt;
}

p {
  margin: 0 0 12pt 0;
  text-align: justify;
}

pre, code {
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 3px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 9pt;
}

pre {
  padding: 12pt;
  overflow: auto;
  page-break-inside: avoid;
  margin: 12pt 0;
}

code {
  padding: 2px 4px;
  font-size: 9pt;
}

blockquote {
  border-left: 4px solid #2e8555;
  padding-left: 16pt;
  margin: 16pt 0;
  color: #666;
  font-style: italic;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin: 16pt 0;
  page-break-inside: avoid;
  font-size: 10pt;
}

th, td {
  border: 1px solid #ddd;
  padding: 8pt 12pt;
  text-align: left;
}

th {
  background-color: #f6f8fa;
  font-weight: 600;
  color: #2e8555;
}

img {
  max-width: 100%;
  height: auto;
  page-break-inside: avoid;
  margin: 12pt 0;
}

ul, ol {
  margin: 12pt 0;
  padding-left: 20pt;
}

li {
  margin: 6pt 0;
}

/* Hide navigation and other web-only elements */
.navbar, .sidebar, .breadcrumbs, .pagination-nav, 
.docusaurus-highlight-code-line, .theme-edit-this-page,
.navbar-sidebar, .navbar-sidebar__backdrop, .navbar-sidebar__brand,
.navbar-sidebar__items, .navbar-sidebar__item, .navbar-sidebar__link,
.theme-doc-sidebar-container, .theme-doc-sidebar-menu,
.theme-doc-breadcrumbs, .theme-doc-toc-mobile,
.theme-doc-footer-edit-meta-row, .theme-doc-footer-edit-meta-row,
.theme-edit-this-page, .theme-last-updated, .theme-prev-next,
.theme-doc-markdown, .theme-doc-markdown > div:first-child,
.theme-doc-markdown > div:last-child {
  display: none !important;
}

/* Show only the main content */
.theme-doc-markdown {
  display: block !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Ensure main content takes full width */
.main-wrapper, .main-content, .container, .row, .col {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
}

/* Style the main content area */
.theme-doc-markdown h1:first-child {
  page-break-before: auto;
  margin-top: 0;
}

/* Improve readability */
.theme-doc-markdown > * {
  max-width: none !important;
}

/* Ensure proper spacing */
.theme-doc-markdown > h1 + * {
  margin-top: 20pt;
}

.theme-doc-markdown > h2 + * {
  margin-top: 15pt;
}

.theme-doc-markdown > h3 + * {
  margin-top: 12pt;
}
`;

async function generatePDFsWithPrinceStatic() {
  console.log('🚀 Starting PDF generation with Prince (static HTML method)...');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created output directory: ${OUTPUT_DIR}`);
  }

  // Create temp directory for HTML files
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
    console.log(`📁 Created temp directory: ${TEMP_DIR}`);
  }

  // Create CSS file for Prince
  const cssPath = path.join(OUTPUT_DIR, 'pdf-styles.css');
  fs.writeFileSync(cssPath, PDF_CSS);
  console.log('📝 Created PDF stylesheet');

  try {
    for (const doc of DOCS_TO_GENERATE) {
      console.log(`📄 Generating PDF for: ${doc.title}`);
      
      const fullUrl = `${BASE_URL}${doc.url}`;
      const outputPath = path.join(OUTPUT_DIR, doc.filename);
      const tempHtmlPath = path.join(TEMP_DIR, `${doc.filename.replace('.pdf', '.html')}`);
      
      console.log(`   🔗 Loading: ${fullUrl}`);
      
      try {
        // First, download the HTML content using curl
        const curlCommand = `curl -s -L "${fullUrl}" -o "${tempHtmlPath}"`;
        execSync(curlCommand, { stdio: 'pipe' });
        
        // Check if HTML file was created and has content
        if (fs.existsSync(tempHtmlPath)) {
          const stats = fs.statSync(tempHtmlPath);
          if (stats.size > 1000) { // Ensure it's not just an error page
            console.log(`   📄 Downloaded HTML (${Math.round(stats.size/1024)} KB)`);
            
            // Now convert HTML to PDF using Prince
            const princeCommand = [
              'prince',
              `"${tempHtmlPath}"`,
              `--output="${outputPath}"`,
              `--style="${cssPath}"`,
              '--pdf-title="' + doc.title + '"',
              '--pdf-subject="DataGOL Documentation"',
              '--pdf-author="DataGOL Team"',
              '--pdf-keywords="DataGOL, Documentation, API, Guide"'
            ].join(' ');

            execSync(princeCommand, { 
              stdio: 'pipe',
              timeout: 30000
            });
            
            // Check if PDF was created and get size
            if (fs.existsSync(outputPath)) {
              const pdfStats = fs.statSync(outputPath);
              const sizeKB = Math.round(pdfStats.size / 1024);
              console.log(`   ✅ Generated: ${doc.filename} (${sizeKB} KB)`);
            } else {
              console.log(`   ⚠️  Warning: ${doc.filename} may not have been created`);
            }
          } else {
            console.log(`   ❌ HTML file too small, skipping ${doc.filename}`);
          }
        } else {
          console.log(`   ❌ Failed to download HTML for ${doc.filename}`);
        }
        
      } catch (error) {
        console.log(`   ❌ Error generating ${doc.filename}:`, error.message);
        // Continue with other PDFs even if one fails
      }
    }

    console.log('🎉 PDF generation completed!');
    console.log(`📁 PDFs saved to: ${OUTPUT_DIR}`);
    
    // List generated files
    const files = fs.readdirSync(OUTPUT_DIR);
    const pdfFiles = files.filter(file => file.endsWith('.pdf'));
    
    if (pdfFiles.length > 0) {
      console.log('\n📋 Generated PDFs:');
      pdfFiles.forEach(file => {
        const filePath = path.join(OUTPUT_DIR, file);
        const stats = fs.statSync(filePath);
        const sizeKB = Math.round(stats.size / 1024);
        console.log(`   📄 ${file} (${sizeKB} KB)`);
      });
    } else {
      console.log('\n⚠️  No PDF files were generated. Check the errors above.');
    }

    // Clean up
    if (fs.existsSync(cssPath)) {
      fs.unlinkSync(cssPath);
      console.log('🧹 Cleaned up temporary CSS file');
    }
    
    if (fs.existsSync(TEMP_DIR)) {
      fs.rmSync(TEMP_DIR, { recursive: true, force: true });
      console.log('🧹 Cleaned up temporary HTML files');
    }

  } catch (error) {
    console.error('❌ Error during PDF generation:', error);
    throw error;
  }
}

// Run the script
if (require.main === module) {
  generatePDFsWithPrinceStatic()
    .then(() => {
      console.log('\n✨ All done! Prince-generated PDFs are ready.');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Script failed:', error);
      process.exit(1);
    });
}

module.exports = { generatePDFsWithPrinceStatic, DOCS_TO_GENERATE };
