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
      script.setAttribute('data-host', 'https://testing.datagol.ai');
      script.setAttribute('data-agent-id', '3ab4f616-814a-4bc7-9b2f-9d0d89b9a83b'); // <-- replace with actual ID
      script.setAttribute('data-app-id', 'fc59016f-49b6-43c2-8fc2-c9ca958c6dab');     // <-- replace with actual ID
      document.body.appendChild(script);
    }
  }, []);

  return <Layout {...props} />;
}