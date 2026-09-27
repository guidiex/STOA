// =========================
// STOA — SERVICE WORKER
// =========================

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./quotes.js",
  "./manifest.json",
  "./privacy.html",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];


// =========================
// INSTALACIÓN
// =========================

self.addEventListener("install", (event) => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then((cache) => {

        console.log("STOA: guardando archivos en caché");

        return cache.addAll(FILES_TO_CACHE);

      })

  );

  self.skipWaiting();

});


// =========================
// ACTIVACIÓN
// =========================

self.addEventListener("activate", (event) => {

  event.waitUntil(

    caches.keys()
      .then((cacheNames) => {

        return Promise.all(

          cacheNames.map((cacheName) => {

            if (cacheName !== CACHE_NAME) {

              console.log(
                "STOA: eliminando caché anterior",
                cacheName
              );

              return caches.delete(cacheName);

            }

          })

        );

      })

  );

  self.clients.claim();

});


// =========================
// PETICIONES
// =========================

self.addEventListener("fetch", (event) => {

  // Solo manejamos peticiones GET
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(

    caches.match(event.request)
      .then((cachedResponse) => {

        // Si está en caché, lo devolvemos
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si no está, buscamos en internet
        return fetch(event.request)
          .then((networkResponse) => {

            // Si la respuesta no es válida,
            // simplemente la devolvemos
            if (
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type === "opaque"
            ) {
              return networkResponse;
            }

            // Clonamos porque la respuesta
            // solo puede consumirse una vez
            const responseToCache =
              networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {

                cache.put(
                  event.request,
                  responseToCache
                );

              });

            return networkResponse;

          })
          .catch(() => {

            console.log(
              "STOA: recurso no disponible offline",
              event.request.url
            );

          });

      })

  );

});