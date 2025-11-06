module.exports = function (context, options) {
  return {
    name: 'iframe-permissions-plugin',
    
    configureWebpack(config, isServer) {
      // Configure webpack dev server to add headers
      if (!isServer && config.devServer) {
        config.devServer.headers = {
          ...(config.devServer.headers || {}),
          'Permissions-Policy': 'microphone=*, camera=*, autoplay=*, display-capture=*, geolocation=*',
          'Feature-Policy': 'microphone *; camera *; autoplay *; display-capture *',
        };
      }
      
      return {
        devServer: {
          headers: {
            'Permissions-Policy': 'microphone=*, camera=*, autoplay=*, display-capture=*, geolocation=*',
            'Feature-Policy': 'microphone *; camera *; autoplay *; display-capture *',
          },
          onBeforeSetupMiddleware: function(devServer) {
            devServer.app.use(function(req, res, next) {
              res.setHeader('Permissions-Policy', 'microphone=*, camera=*, autoplay=*, display-capture=*, geolocation=*');
              res.setHeader('Feature-Policy', 'microphone *; camera *; autoplay *; display-capture *');
              next();
            });
          },
        },
      };
    },
    
    injectHtmlTags() {
      return {
        headTags: [],
        preBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              (function() {
                // Register service worker for permissions policy
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.register('/sw-permissions.js')
                    .then(function(registration) {
                      console.log('Permissions Service Worker registered:', registration);
                    })
                    .catch(function(error) {
                      console.log('Service Worker registration failed:', error);
                    });
                }
                
                // Intercept document.createElement to catch iframe creation
                const originalCreateElement = document.createElement.bind(document);
                document.createElement = function(tagName) {
                  const element = originalCreateElement(tagName);
                  if (tagName.toLowerCase() === 'iframe') {
                    console.log('Intercepted iframe creation');
                    element.setAttribute('allow', 'microphone; camera; autoplay; encrypted-media; display-capture; geolocation');
                    
                    // Also watch for src changes
                    const originalSetAttribute = element.setAttribute.bind(element);
                    element.setAttribute = function(name, value) {
                      originalSetAttribute(name, value);
                      if (name === 'src') {
                        console.log('Iframe src set to:', value);
                        originalSetAttribute('allow', 'microphone; camera; autoplay; encrypted-media; display-capture; geolocation');
                      }
                    };
                  }
                  return element;
                };
                
                // Also observe DOM for any iframes
                function setIframePermissions(iframe) {
                  if (iframe && iframe.tagName === 'IFRAME') {
                    const currentAllow = iframe.getAttribute('allow');
                    const newAllow = 'microphone; camera; autoplay; encrypted-media; display-capture; geolocation';
                    if (currentAllow !== newAllow) {
                      iframe.setAttribute('allow', newAllow);
                      console.log('Updated iframe permissions:', iframe.src || iframe.id || 'unknown');
                    }
                  }
                }
                
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                      if (node.nodeType === 1) {
                        if (node.tagName === 'IFRAME') {
                          setIframePermissions(node);
                        }
                        if (node.querySelectorAll) {
                          const iframes = node.querySelectorAll('iframe');
                          iframes.forEach(setIframePermissions);
                        }
                      }
                    });
                  });
                });
                
                if (document.documentElement) {
                  observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['src']
                  });
                }
                
                // Periodic check
                setInterval(function() {
                  const iframes = document.querySelectorAll('iframe');
                  iframes.forEach(setIframePermissions);
                }, 500);
              })();
            `,
          },
        ],
        postBodyTags: [],
      };
    },
  };
};

