import React from 'react';
import { useLocation } from '@docusaurus/router';

const PDFDownloadButton = () => {
  const location = useLocation();
  
  // Map of page paths to PDF filenames
  const pdfMap = {
    '/docs/intro': 'DataGOL-Introduction.pdf',
    '/docs/datagol-concepts': 'DataGOL-Concepts.pdf',
    '/docs/Lakehouse/about-lakehouse': 'DataGOL-Lakehouse.pdf',
    '/docs/AI Agents/about-ai-agent': 'DataGOL-AI-Agents.pdf',
    '/docs/BI Analytics/bi-workbook': 'DataGOL-BI-Analytics.pdf',
    '/docs/Workbooks/about-workbook': 'DataGOL-Workbooks.pdf',
    '/docs/Reference guides/roles-and-permissions': 'DataGOL-Reference-Guides.pdf',
    '/docs/best-practices': 'DataGOL-Best-Practices.pdf',
    '/docs/faqs': 'DataGOL-FAQs.pdf',
  };

  const currentPath = location.pathname;
  const pdfFilename = pdfMap[currentPath];

  if (!pdfFilename) {
    return null; // Don't show button if no PDF is available for this page
  }

  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = `/pdfs/${pdfFilename}`;
    link.download = pdfFilename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ 
      margin: '20px 0', 
      padding: '15px', 
      backgroundColor: '#f8f9fa', 
      border: '1px solid #e9ecef', 
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>
        📄 Download this page as PDF
      </p>
      <button
        onClick={handleDownload}
        style={{
          backgroundColor: '#2e8555',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2a7a4e'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#2e8555'}
      >
        📥 Download PDF
      </button>
    </div>
  );
};

export default PDFDownloadButton;
