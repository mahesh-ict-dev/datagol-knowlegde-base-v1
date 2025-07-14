import React, { useEffect } from 'react';

export default function GiscusComments() {
  useEffect(() => {
   // if (process.env.NODE_ENV === 'production') {
      // Don't show comments in production
   //   return;
   // }
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'mahesh-ict-dev/datagol-knowlegde-base-v1');
    script.setAttribute('data-repo-id', 'R_kgDOOthykw');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOOthyk84Cs7ia');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const giscusContainer = document.getElementById('giscus-container');
    if (giscusContainer) {
      giscusContainer.innerHTML = '';
      giscusContainer.appendChild(script);
    }
  }, []);

  return <div id="giscus-container" style={{ marginTop: '2rem' }} />;
}
