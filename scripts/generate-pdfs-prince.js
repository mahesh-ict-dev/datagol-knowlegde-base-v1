const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = './build/pdfs';
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

// CSS for better PDF styling
const PDF_CSS = `
@page {
  size: A4;
  margin: 2cm 1.5cm;
  @top-center {
    content: "DataGOL Documentation";
    font-size: 10pt;
    color: #666;
  }
  @bottom-center {
    content: counter(page) " / " counter(pages);
    font-size: 10pt;
    color: #666;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3, h4, h5, h6 {
  color: #2e8555;
  page-break-after: avoid;
}

h1 {
  font-size: 24pt;
  margin-top: 0;
  page-break-before: always;
}

h2 {
  font-size: 18pt;
  margin-top: 20pt;
}

h3 {
  font-size: 14pt;
  margin-top: 15pt;
}

pre, code {
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 3px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

pre {
  padding: 16px;
  overflow: auto;
  page-break-inside: avoid;
}

code {
  padding: 2px 4px;
  font-size: 85%;
}

blockquote {
  border-left: 4px solid #2e8555;
  padding-left: 16px;
  margin: 16px 0;
  color: #666;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin: 16px 0;
  page-break-inside: avoid;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px 12px;
  text-align: left;
}

th {
  background-color: #f6f8fa;
  font-weight: 600;
}

img {
  max-width: 100%;
  height: auto;
  page-break-inside: avoid;
}

/* Hide navigation and other web-only elements */
.navbar, .sidebar, .breadcrumbs, .pagination-nav, 
.docusaurus-highlight-code-line, .theme-edit-this-page {
  display: none !important;
}

/* Ensure main content takes full width */
.main-wrapper {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Style the main content area */
.main-content {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
`;

async function generatePDFsWithPrince() {
  console.log('🚀 Starting PDF generation with Prince...');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created output directory: ${OUTPUT_DIR}`);
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
      
      console.log(`   🔗 Loading: ${fullUrl}`);
      
      // Prince command with options for better PDF generation
      const princeCommand = [
        'prince',
        `"${fullUrl}"`,
        `--output="${outputPath}"`,
        `--style="${cssPath}"`,
        '--javascript',
        '--max-passes=3',
        '--http-timeout=30',
        '--pdf-title="' + doc.title + '"',
        '--pdf-subject="DataGOL Documentation"',
        '--pdf-author="DataGOL Team"',
        '--pdf-keywords="DataGOL, Documentation, API, Guide"'
      ].join(' ');

      try {
        execSync(princeCommand, { 
          stdio: 'pipe',
          timeout: 60000 // 60 second timeout
        });
        
        // Check if file was created and get size
        if (fs.existsSync(outputPath)) {
          const stats = fs.statSync(outputPath);
          const sizeKB = Math.round(stats.size / 1024);
          console.log(`   ✅ Generated: ${doc.filename} (${sizeKB} KB)`);
        } else {
          console.log(`   ⚠️  Warning: ${doc.filename} may not have been created`);
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

    // Clean up CSS file
    if (fs.existsSync(cssPath)) {
      fs.unlinkSync(cssPath);
      console.log('🧹 Cleaned up temporary CSS file');
    }

  } catch (error) {
    console.error('❌ Error during PDF generation:', error);
    throw error;
  }
}

// Run the script
if (require.main === module) {
  generatePDFsWithPrince()
    .then(() => {
      console.log('\n✨ All done! Prince-generated PDFs are ready.');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Script failed:', error);
      process.exit(1);
    });
}

module.exports = { generatePDFsWithPrince, DOCS_TO_GENERATE };
