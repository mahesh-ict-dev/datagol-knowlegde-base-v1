import PDFMerger from 'pdf-merger-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PDF_DIR = './build/pdfs';
const OUTPUT_FILE = './build/DataGOL-Complete-Documentation.pdf';

// Define the order of sections for logical document structure
const SECTION_ORDER = [
  // Getting Started
  'DataGOL-Documentation-Hub',
  'DataGOL-DataGOL-Concepts',
  'DataGOL-Before-You-Begin',
  'DataGOL-Signing-Up-DataGOL',
  'DataGOL-Logging-In-To-DataGOL',
  
  // User Guide
  'DataGOL-Inviting-Team-Members',
  'DataGOL-Editing-Team-Members-Role',
  'DataGOL-Using-Your-Own-Storage-With-DataGOL',
  'DataGOL-Configuring-DataGOL-With-REST-APIs',
  
  // Core Concepts
  'DataGOL-About-Workspace',
  'DataGOL-About-Lakehouse',
  'DataGOL-Lakehouse-Workflow',
  
  // Data Sources
  'DataGOL-About-Data-Sources',
  
  // Pipelines
  'DataGOL-About-Pipelines',
  'DataGOL-Creating-Custom-Pipeline',
  'DataGOL-Creating-Dedup-Pipeline',
  
  // Orchestrations
  'DataGOL-About-Orchestrations',
  'DataGOL-Creating-Orchestration',
  
  // AI Agents
  'DataGOL-About-Ai-Agent',
  'DataGOL-Ai-Search-Agent',
  'DataGOL-Python-Agent',
  'DataGOL-SQL-Agent',
  'DataGOL-RAG-Agent',
  
  // BI Analytics
  'DataGOL-About-BI-Analytics',
  'DataGOL-BI-Workbook',
  'DataGOL-Dashboards',
  'DataGOL-Visualizer',
  'DataGOL-Widgets',
  
  // Workbooks
  'DataGOL-About-Workbooks',
  'DataGOL-Creating-Workbook',
  
  // Machine Learning
  'DataGOL-About-Machine-Learning-ML',
  
  // Data Lineage
  'DataGOL-About-Data-Lineage',
  
  // Playground
  'DataGOL-About-Playground',
  
  // Reference Guides
  'DataGOL-Roles-Permissions',
  'DataGOL-Formulas',
  
  // Best Practices & FAQ
  'DataGOL-Best-Practices',
  'DataGOL-FAQs',
  'DataGOL-API-Guide'
];

async function mergeAllPDFs() {
  console.log('🔄 Starting PDF merge process...');
  
  // Check if PDF directory exists
  if (!fs.existsSync(PDF_DIR)) {
    console.error(`❌ PDF directory not found: ${PDF_DIR}`);
    console.log('💡 Please run "npm run generate-pdfs-complete" first to generate individual PDFs');
    process.exit(1);
  }

  // Get all PDF files
  const allPdfFiles = fs.readdirSync(PDF_DIR)
    .filter(file => file.endsWith('.pdf'))
    .map(file => path.join(PDF_DIR, file));

  if (allPdfFiles.length === 0) {
    console.error('❌ No PDF files found in the directory');
    console.log('💡 Please run "npm run generate-pdfs-complete" first to generate individual PDFs');
    process.exit(1);
  }

  console.log(`📄 Found ${allPdfFiles.length} PDF files to merge`);

  // Create merger instance
  const merger = new PDFMerger();

  try {
    // Sort files based on predefined order, then alphabetically for any remaining files
    const sortedFiles = [];
    
    // First, add files in the predefined order
    SECTION_ORDER.forEach(sectionName => {
      const matchingFile = allPdfFiles.find(file => 
        path.basename(file, '.pdf').includes(sectionName) ||
        path.basename(file, '.pdf').replace(/[^a-zA-Z0-9]/g, '-').includes(sectionName.replace(/[^a-zA-Z0-9]/g, '-'))
      );
      if (matchingFile) {
        sortedFiles.push(matchingFile);
      }
    });

    // Then add any remaining files alphabetically
    const remainingFiles = allPdfFiles.filter(file => !sortedFiles.includes(file));
    remainingFiles.sort();
    sortedFiles.push(...remainingFiles);

    console.log('📋 Merging PDFs in the following order:');
    
    // Add each PDF to the merger
    for (let i = 0; i < sortedFiles.length; i++) {
      const file = sortedFiles[i];
      const fileName = path.basename(file);
      
      console.log(`   ${i + 1}. ${fileName}`);
      
      try {
        await merger.add(file);
      } catch (error) {
        console.warn(`⚠️  Warning: Could not add ${fileName}: ${error.message}`);
      }
    }

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Save the merged PDF
    console.log('💾 Saving merged PDF...');
    await merger.save(OUTPUT_FILE);

    // Get file size for reporting
    const stats = fs.statSync(OUTPUT_FILE);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log('✅ PDF merge completed successfully!');
    console.log(`📁 Output file: ${OUTPUT_FILE}`);
    console.log(`📊 File size: ${fileSizeInMB} MB`);
    console.log(`📄 Total pages: Combined from ${sortedFiles.length} individual PDFs`);
    
  } catch (error) {
    console.error('❌ Error during PDF merge:', error.message);
    process.exit(1);
  }
}

// Add table of contents generation
async function generateTableOfContents() {
  console.log('📑 Generating table of contents...');
  
  const tocContent = `# DataGOL Complete Documentation

## Table of Contents

This document contains the complete DataGOL documentation, automatically generated and merged from all individual documentation pages.

### Sections Included:

1. **Getting Started**
   - Documentation Hub
   - DataGOL Concepts
   - Before You Begin
   - Signing Up
   - Logging In

2. **User Guide**
   - Inviting Team Members
   - Editing Team Member Roles
   - Using Your Own Storage
   - Configuring with REST APIs

3. **Core Concepts**
   - About Workspace
   - About Lakehouse
   - Lakehouse Workflow

4. **Data Sources**
   - About Data Sources
   - Connecting Various Data Sources

5. **Pipelines**
   - About Pipelines
   - Creating Custom Pipelines
   - Creating Dedup Pipelines

6. **Orchestrations**
   - About Orchestrations
   - Creating Orchestrations

7. **AI Agents**
   - About AI Agents
   - AI Search Agent
   - Python Agent
   - SQL Agent
   - RAG Agent
   - And more...

8. **BI Analytics**
   - About BI Analytics
   - BI Workbooks
   - Dashboards
   - Visualizer
   - Widgets

9. **Workbooks**
   - About Workbooks
   - Creating Workbooks

10. **Machine Learning**
    - About Machine Learning

11. **Data Lineage**
    - About Data Lineage

12. **Playground**
    - About Playground

13. **Reference Guides**
    - Roles & Permissions
    - Formulas

14. **Best Practices & FAQ**
    - Best Practices
    - FAQs
    - API Guide

---

Generated on: ${new Date().toISOString()}
Total individual documents merged: ${fs.readdirSync(PDF_DIR).filter(f => f.endsWith('.pdf')).length}

`;

  // Save TOC as a text file
  const tocFile = './build/DataGOL-Documentation-TOC.txt';
  fs.writeFileSync(tocFile, tocContent);
  console.log(`📋 Table of contents saved to: ${tocFile}`);
}

// Main execution
async function main() {
  console.log('🚀 DataGOL PDF Merger');
  console.log('====================');
  
  await mergeAllPDFs();
  await generateTableOfContents();
  
  console.log('\n🎉 All done! You now have:');
  console.log(`   📄 Complete PDF: ${OUTPUT_FILE}`);
  console.log(`   📋 Table of Contents: ./build/DataGOL-Documentation-TOC.txt`);
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

export { mergeAllPDFs, generateTableOfContents };
