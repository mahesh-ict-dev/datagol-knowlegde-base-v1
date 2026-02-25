const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'http://localhost:3000';
const BASE_PATH = '/datagol-knowlegde-base-v1';
const OUTPUT_DIR = './build/pdfs';

// Load the correct URLs from the built site
const correctUrls = JSON.parse(fs.readFileSync('./built-urls.json', 'utf8'));

// Convert to PDF generation format
const COMPLETE_DOCS_TO_GENERATE = correctUrls.map(item => ({
  url: `${BASE_PATH}${item.url}`,
  filename: `DataGOL-${item.title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-')}.pdf`,
  title: `DataGOL Documentation - ${item.title}`,
  description: `Documentation for ${item.title}`,
  originalFile: item.file,
  originalPath: item.path
}));

async function generateCompletePDFs() {
  console.log('🚀 Starting Complete PDF generation...');
  console.log(`📊 Generating ${COMPLETE_DOCS_TO_GENERATE.length} PDF documents`);
  
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

  const results = {
    successful: [],
    failed: []
  };

  try {
    for (const doc of COMPLETE_DOCS_TO_GENERATE) {
      console.log(`\n📄 Generating PDF for: ${doc.title}`);
      console.log(`   📝 Description: ${doc.description}`);
      
      const page = await browser.newPage();
      
      // Set viewport for consistent rendering
      await page.setViewport({ width: 1200, height: 800 });
      
      // Navigate to the page (URL encode the path)
      const fullUrl = `${BASE_URL}${encodeURI(doc.url)}`;
      console.log(`   🔗 Loading: ${fullUrl}`);
      
      try {
        // Navigate to the page with better error handling
        const response = await page.goto(fullUrl, { 
          waitUntil: 'networkidle0',
          timeout: 30000 
        });

        // Check HTTP status
        if (!response || response.status() >= 400) {
          console.log(`   ❌ ERROR: HTTP ${response ? response.status() : 'No response'}`);
          results.failed.push({
            ...doc,
            error: `HTTP ${response ? response.status() : 'No response'}`
          });
          await page.close();
          continue;
        }

        // Wait for content to load
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Check for error messages in the page content
        const pageInfo = await page.evaluate(() => {
          const body = document.body.innerText;
          const title = document.title;
          const hasError = body.includes('Page Not Found') || 
                          body.includes('404') || 
                          body.includes('We could not find') ||
                          body.includes('Not Found') ||
                          title.includes('404');
          
          return {
            hasError,
            title,
            bodyLength: body.length,
            url: window.location.href
          };
        });

        if (pageInfo.hasError || pageInfo.bodyLength < 100) {
          console.log(`   ❌ ERROR: Page not found or 404 error (Title: ${pageInfo.title}, Body length: ${pageInfo.bodyLength})`);
          results.failed.push({
            ...doc,
            error: `Page not found or 404 error (Title: ${pageInfo.title})`
          });
          await page.close();
          continue;
        }

        console.log(`   ✅ Page loaded successfully (Title: ${pageInfo.title})`);

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

        // Check file size
        const stats = fs.statSync(pdfPath);
        const sizeKB = Math.round(stats.size / 1024);
        
        console.log(`   ✅ Generated: ${doc.filename} (${sizeKB} KB)`);
        results.successful.push({
          ...doc,
          sizeKB: sizeKB
        });

      } catch (error) {
        console.log(`   ❌ ERROR: ${error.message}`);
        results.failed.push({
          ...doc,
          error: error.message
        });
      }

      await page.close();
    }

    // Summary
    console.log('\n🎉 PDF generation completed!');
    console.log('='.repeat(60));
    console.log(`✅ Successful: ${results.successful.length}`);
    console.log(`❌ Failed: ${results.failed.length}`);
    
    if (results.successful.length > 0) {
      console.log('\n📋 Successfully Generated PDFs:');
      results.successful.forEach(result => {
        console.log(`   📄 ${result.filename} (${result.sizeKB} KB) - ${result.description}`);
      });
    }
    
    if (results.failed.length > 0) {
      console.log('\n❌ Failed PDFs:');
      results.failed.forEach(result => {
        console.log(`   📄 ${result.filename} - ${result.error}`);
      });
    }
    
    console.log(`\n📁 PDFs saved to: ${OUTPUT_DIR}`);
    
    // List all generated files
    const files = fs.readdirSync(OUTPUT_DIR);
    const pdfFiles = files.filter(file => file.endsWith('.pdf'));
    console.log(`\n📊 Total PDF files in directory: ${pdfFiles.length}`);

    // Save results to file
    fs.writeFileSync('./pdf-generation-results.json', JSON.stringify({
      successful: results.successful,
      failed: results.failed,
      summary: {
        total: COMPLETE_DOCS_TO_GENERATE.length,
        successful: results.successful.length,
        failed: results.failed.length,
        successRate: Math.round((results.successful.length / COMPLETE_DOCS_TO_GENERATE.length) * 100)
      }
    }, null, 2));
    console.log('💾 Results saved to pdf-generation-results.json');

  } catch (error) {
    console.error('❌ Error generating PDFs:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the script
if (require.main === module) {
  generateCompletePDFs()
    .then(() => {
      console.log('\n✨ Complete PDF generation finished!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Script failed:', error);
      process.exit(1);
    });
}

module.exports = { generateCompletePDFs, COMPLETE_DOCS_TO_GENERATE };
