const urlsToCache = [
  "/",
  "/css/main.css",
  // "/js/main.js",
  "/js/calculator/script.js",
  "/js/calculator/copyResult.js",
  "/js/calculator/getControlMenus.js",
  "/js/calculator/getExpression.js",
  "/js/calculator/getPreviousCalcElem.js",
  "/js/calculator/getTimeObj.js",
  "/app.webmanifest",
  "/assets/image.png",
  "/assets/calculator.ico",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2",
];

self.addEventListener("install", (event) => {
  console.log("Service worker installed");
  let cacheUrls = async () => {
    const cache = await caches.open("pwa-assets");
    // return await cache.addAll(urlsToCache);
    for (let url of urlsToCache) {
      try {
        console.log(url);
        await cache.add(url);
      } catch (error) {
        console.log(error);
      }
    }
  };
  event.waitUntil(cacheUrls());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRespond) => {
      console.log(event.request);
      return cacheRespond || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});
