import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  useEffect(() => {
    const existingScript = document.getElementById('letzask-chatbot');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'letzask-chatbot';
      script.src = 'https://d3ua5pgefbvm1i.cloudfront.net/chatbot.js';
      script.async = true;
      script.setAttribute('data-host', 'https://app.datagol.ai');
      script.setAttribute('data-agent-id', '4fb1a149-fe5c-4e73-94e2-a2b872072adc'); // <-- replace with actual ID
      script.setAttribute('data-app-id', '6bff5a98-8764-48eb-af76-b2b1fc849947');     // <-- replace with actual ID
      document.body.appendChild(script);
    }
  }, []);

  return <Layout {...props} />;
}