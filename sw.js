self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

// Cada vez que exista una peticion vamos a verificar que esta sea con el metodo GET
self.addEventListener("fetch", (event) => {
  const request = event.request;
  //get
  if (request.method !== "GET") {
    return;
  }
});
async function precache() {
  const cache = await caches.open("v1");
  return cache.addAll([
    "/",
    "/index.html",
    "/assets/index.js",
    "/assets/MediaPlayer.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/plugins/AutoPause.js",
    "/assets/index.css",
    "/assets/OhSheep!.mp4",
  ]);
}
