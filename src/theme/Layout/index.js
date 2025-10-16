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

      // Add microphone permissions to the chatbot iframe when it loads
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              // Check if it's an iframe
              if (node.tagName === 'IFRAME') {
                console.log('Found iframe:', node.id, node.src, node.className);
                node.setAttribute('allow', 'microphone; camera; autoplay; encrypted-media; display-capture');
                console.log('Added permissions to iframe');
              }
              // Also check for iframes inside the added node
              const iframes = node.querySelectorAll?.('iframe');
              if (iframes && iframes.length > 0) {
                iframes.forEach((iframe) => {
                  console.log('Found nested iframe:', iframe.id, iframe.src, iframe.className);
                  iframe.setAttribute('allow', 'microphone; camera; autoplay; encrypted-media; display-capture');
                  console.log('Added permissions to nested iframe');
                });
              }
            }
          });
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Also try to catch iframes that might already exist
      setTimeout(() => {
        const allIframes = document.querySelectorAll('iframe');
        allIframes.forEach((iframe) => {
          console.log('Found existing iframe:', iframe.id, iframe.src, iframe.className);
          iframe.setAttribute('allow', 'microphone; camera; autoplay; encrypted-media; display-capture');
        });
      }, 2000);
    }
  }, []);

  return <Layout {...props} />;
}