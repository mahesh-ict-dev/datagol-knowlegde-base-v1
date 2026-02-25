const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'http://localhost:3000'; // Your local development server
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
    url: '/docs/BI%20Analytics/BI%20Workbook',
    filename: 'DataGOL-BI-Analytics.pdf',
    title: 'DataGOL Documentation - BI Analytics'
  },
  {
    url: '/docs/Workbooks/about-workbook',
    filename: 'DataGOL-Workbooks.pdf',
    title: 'DataGOL Documentation - Workbooks'
  },
  {
    url: '/docs/Reference%20guides/roles-permissions',
    filename: 'DataGOL-Reference-Guides.pdf',
    title: 'DataGOL Documentation - Reference Guides'
  },
  {
    url: '/docs/datagol-best-practices',
    filename: 'DataGOL-Best-Practices.pdf',
    title: 'DataGOL Documentation - Best Practices'
  },
  {
    url: '/docs/datagol-faq',
    filename: 'DataGOL-FAQs.pdf',
    title: 'DataGOL Documentation - FAQs'
  }
];

async function generatePDFs() {
  console.log('🚀 Starting PDF generation...');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created output directory: ${OUTPUT_DIR}`);
  }

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const doc of DOCS_TO_GENERATE) {
      console.log(`📄 Generating PDF for: ${doc.title}`);
      
      const page = await browser.newPage();
      
      // Set viewport for consistent rendering
      await page.setViewport({ width: 1200, height: 800 });
      
      // Navigate to the page
      const fullUrl = `${BASE_URL}${doc.url}`;
      console.log(`   🔗 Loading: ${fullUrl}`);
      
      await page.goto(fullUrl, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });

      // Wait for content to load
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate PDF
      const pdfPath = path.join(OUTPUT_DIR, doc.filename);
      
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20mm',
          right: '15mm',
          bottom: '20mm',
          left: '15mm'
        },
        displayHeaderFooter: true,
        headerTemplate: `
          <div style="font-size: 10px; text-align: center; width: 100%; color: #666;">
            <span>${doc.title}</span>
          </div>
        `,
        footerTemplate: `
          <div style="font-size: 10px; text-align: center; width: 100%; color: #666;">
            <span class="pageNumber"></span> / <span class="totalPages"></span>
          </div>
        `
      });

      console.log(`   ✅ Generated: ${doc.filename}`);
      await page.close();
    }

    console.log('🎉 PDF generation completed successfully!');
    console.log(`📁 PDFs saved to: ${OUTPUT_DIR}`);
    
    // List generated files
    const files = fs.readdirSync(OUTPUT_DIR);
    console.log('\n📋 Generated PDFs:');
    files.forEach(file => {
      if (file.endsWith('.pdf')) {
        const filePath = path.join(OUTPUT_DIR, file);
        const stats = fs.statSync(filePath);
        const sizeKB = Math.round(stats.size / 1024);
        console.log(`   📄 ${file} (${sizeKB} KB)`);
      }
    });

  } catch (error) {
    console.error('❌ Error generating PDFs:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the script
if (require.main === module) {
  generatePDFs()
    .then(() => {
      console.log('\n✨ All done! You can now serve the PDFs from your build directory.');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Script failed:', error);
      process.exit(1);
    });
}

module.exports = { generatePDFs, DOCS_TO_GENERATE };
