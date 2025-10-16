// Service Worker to add Permissions-Policy headers
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).then((response) => {
      // Clone the response
      const newHeaders = new Headers(response.headers);
      
      // Add permissions policy headers
      newHeaders.set('Permissions-Policy', 'microphone=*, camera=*, autoplay=*, display-capture=*, geolocation=*');
      newHeaders.set('Feature-Policy', 'microphone *; camera *; autoplay *; display-capture *');
      
      // Create new response with updated headers
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
      
      return newResponse;
    }).catch((error) => {
      console.error('Service worker fetch error:', error);
      return fetch(event.request);
    })
  );
});

self.addEventListener('install', (event) => {
  console.log('Service Worker installing with permissions policy support');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated with permissions policy support');
  event.waitUntil(clients.claim());
});

