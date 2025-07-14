import React from 'react';

export default function MendableWidget() {
  return <div>Mendable Widget Placeholder</div>;
}

/*// src/components/MendableWidget.js
import React from 'react';
import { useEffect } from 'react';

function MendableWidget() {
  useEffect(() => {
    // Load Mendable script
    const script = document.createElement('script');
    script.src = 'https://mendableai.com/widget.js';
    script.async = true;
    
    script.onload = () => {
      if (window.Mendable) {
        window.Mendable.initialize({
          anon_key: '73d0d239-72d5-47e7-be4f-8f19a023c724',
          style: { 
            primary: '#007cba',
            secondary: '#ffffff'
          },
          floatingButton: { 
            color: '#007cba',
            backgroundColor: '#007cba'
          },
          chatWindow: {
            welcomeMessage: "Hi! I'm here to help you with DataGOL documentation. What can I assist you with?",
            placeholder: "Ask me about DataGOL...",
            title: "DataGOL Assistant"
          }
        });
      }
    };
    
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src="https://mendableai.com/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
}

export default MendableWidget; */