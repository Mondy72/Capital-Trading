/* Capital Pro service worker — intentionally does NOT cache anything.
   Trading needs live data, so every request goes straight to the network and
   a new index.html on the server reaches users on their next open. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', () => { /* no respondWith: the browser handles it normally */ });
