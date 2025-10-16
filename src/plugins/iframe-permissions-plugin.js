module.exports = function (context, options) {
  return {
    name: 'iframe-permissions-plugin',
    
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'meta',
            attributes: {
              'http-equiv': 'Permissions-Policy',
              content: 'microphone=*, camera=*, autoplay=*, display-capture=*, geolocation=*',
            },
          },
        ],
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              (function() {
                // Set permissions on all iframes
                function setIframePermissions(iframe) {
                  if (iframe && iframe.tagName === 'IFRAME') {
                    iframe.setAttribute('allow', 'microphone; camera; autoplay; encrypted-media; display-capture; geolocation');
                    console.log('Set permissions on iframe:', iframe.src || iframe.id);
                  }
                }
                
                // Watch for new iframes
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                      if (node.nodeType === 1) {
                        if (node.tagName === 'IFRAME') {
                          setIframePermissions(node);
                        }
                        // Check nested iframes
                        if (node.querySelectorAll) {
                          const iframes = node.querySelectorAll('iframe');
                          iframes.forEach(setIframePermissions);
                        }
                      }
                    });
                  });
                });
                
                // Start observing
                if (document.body) {
                  observer.observe(document.body, {
                    childList: true,
                    subtree: true
                  });
                } else {
                  document.addEventListener('DOMContentLoaded', function() {
                    observer.observe(document.body, {
                      childList: true,
                      subtree: true
                    });
                  });
                }
                
                // Handle existing iframes on load
                window.addEventListener('load', function() {
                  const iframes = document.querySelectorAll('iframe');
                  iframes.forEach(setIframePermissions);
                });
              })();
            `,
          },
        ],
      };
    },
  };
};

