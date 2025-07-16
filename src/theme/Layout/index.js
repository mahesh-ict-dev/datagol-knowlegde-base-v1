import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  useEffect(() => {
    const existingScript = document.getElementById('letzask-chatbot');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'letzask-chatbot';
      script.src = 'https://d3ua5pgefbvm1i.cloudfront.net/chatbot_widget/chatbot-widget.js';
      script.async = true;
      script.setAttribute('data-agent-id', 'YOUR_AGENT_ID'); // <-- replace with actual ID
      script.setAttribute('data-app-id', 'YOUR_APP_ID');     // <-- replace with actual ID
      document.body.appendChild(script);
    }
  }, []);

  return <Layout {...props} />;
}
