# PDF Generation for DataGOL Documentation

This project includes a custom PDF generation system using Puppeteer to create downloadable PDFs from your documentation pages.

## 🚀 Quick Start

### 1. Generate PDFs

You now have **three different PDF generation methods**:

#### **Method 1: Puppeteer (Recommended)**
```bash
# Build the site and generate PDFs in one command
npm run build:pdfs

# Or run them separately
npm run build
npm run generate-pdfs
```

#### **Method 2: Prince XML (High Quality)**
```bash
# Using Prince XML for higher quality PDFs
npm run build:pdfs-prince

# Or run them separately
npm run build
npm run generate-pdfs-prince
```

#### **Method 3: Prince XML with Static HTML (Most Reliable)**
```bash
# Using Prince with static HTML download (most reliable)
npm run build:pdfs-prince-static

# Or run them separately
npm run build
npm run generate-pdfs-prince-static
```

### 2. Start Development Server
```bash
# Start the development server (required for PDF generation)
npm start
```

## 📁 Generated Files

PDFs will be created in the `build/pdfs/` directory with the following structure:
- `DataGOL-Introduction.pdf`
- `DataGOL-Concepts.pdf`
- `DataGOL-Lakehouse.pdf`
- `DataGOL-AI-Agents.pdf`
- `DataGOL-BI-Analytics.pdf`
- `DataGOL-Workbooks.pdf`
- `DataGOL-Reference-Guides.pdf`
- `DataGOL-Best-Practices.pdf`
- `DataGOL-FAQs.pdf`

## 🔧 How It Works

1. **Puppeteer Script**: `scripts/generate-pdfs.js` uses Puppeteer to:
   - Launch a headless browser
   - Navigate to each documentation page
   - Generate high-quality PDFs with proper formatting
   - Include headers and footers with page numbers

2. **Download Buttons**: The `PDFDownloadButton` component can be added to pages to provide direct download links

## 📝 Adding Download Buttons to Pages

To add download buttons to specific documentation pages, add this to your MDX files:

```jsx
import PDFDownloadButton from '@site/src/components/PDFDownloadButton';

<PDFDownloadButton />
```

## ⚙️ Configuration

### Adding New Pages to PDF Generation

Edit `scripts/generate-pdfs.js` and add new entries to the `DOCS_TO_GENERATE` array:

```javascript
{
  url: '/docs/your-new-page',
  filename: 'Your-New-Page.pdf',
  title: 'DataGOL Documentation - Your New Page'
}
```

### Customizing PDF Settings

In `scripts/generate-pdfs.js`, you can modify:
- Page format (currently A4)
- Margins
- Header/footer templates
- Viewport size
- Wait times

## 🐛 Troubleshooting

### PDF Generation Fails
1. Make sure your development server is running (`npm start`)
2. Check that all URLs in `DOCS_TO_GENERATE` are correct
3. Verify the pages load correctly in your browser

### Download Buttons Don't Appear
1. Make sure you've added the component to your MDX files
2. Check that the page path matches one in the `pdfMap` in `PDFDownloadButton.js`

### PDFs Look Different from Web Pages
1. Adjust the viewport size in the script
2. Modify CSS print styles if needed
3. Check that `printBackground: true` is set for colored backgrounds

## 📊 PDF Generation Methods Comparison

| Method | Quality | Speed | Reliability | File Size | Best For |
|--------|---------|-------|-------------|-----------|----------|
| **Puppeteer** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | Large | General use, full content |
| **Prince Direct** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | Small | High quality, simple pages |
| **Prince Static** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | Medium | High quality, reliable |

### **Recommendations:**
- **For most users**: Use **Puppeteer** (`npm run build:pdfs`)
- **For high-quality PDFs**: Use **Prince Static** (`npm run build:pdfs-prince-static`)
- **For simple pages**: Use **Prince Direct** (`npm run build:pdfs-prince`)

## 📋 Available Scripts

- `npm run build:pdfs` - Build site and generate PDFs with Puppeteer
- `npm run build:pdfs-prince` - Build site and generate PDFs with Prince XML
- `npm run build:pdfs-prince-static` - Build site and generate PDFs with Prince (static method)
- `npm run generate-pdfs` - Generate PDFs with Puppeteer only
- `npm run generate-pdfs-prince` - Generate PDFs with Prince only
- `npm run generate-pdfs-prince-static` - Generate PDFs with Prince (static) only
- `npm run build` - Build the site only
- `npm start` - Start development server

## 🎯 Next Steps

1. Run `npm run build:pdfs` to generate your first set of PDFs
2. Add download buttons to key documentation pages
3. Test the download functionality
4. Customize the PDF styling as needed

## 📞 Support

If you encounter issues:
1. Check the console output for error messages
2. Verify all dependencies are installed (`npm install`)
3. Ensure your development server is accessible at `http://localhost:3000`
