const CACHE_NAME = "mi-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/cake.html",
  "/memorylane.html",
  "/letter.html",
  "/3.jpg",
  "/1.jpg",
  "/6.jpg",
  "/2.jpeg",
  "/5.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
