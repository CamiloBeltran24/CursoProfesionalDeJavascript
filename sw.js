/**
 * Para trabajar con service workers dentro de google chrome, abrimos el inspector
 * Application => Service Workers
 */
const VERSION = "v1";

self.addEventListener("install", (event) => {
  //self es como this pero para service workers
  event.waitUntil(precache()); //waitUtil, espera a que se complete, en este caso espera a qie se complete la funcion precache que es una promesa
});

//Cuando se haga una peticion primero miraremos si la respuesta esta en cache.
// Cada vez que exista una peticion vamos a verificar que esta sea con el metodo GET
self.addEventListener("fetch", (event) => {
  const request = event.request;
  //get
  if (request.method !== "GET") {
    return;
  }
  //buscar en cache
  event.respondWith(cachedResponse(request));
  //Actualizar el cache
  event.waitUntil(updateCache(request));
});

// Para trabajar con caches debemos hacer uso de un elemento de la API del dom que es "caches"
// especificamente la cache "open"
async function precache() {
  const cache = await caches.open(VERSION); // crea una instancia de cache y la nombra v1, caches,open retorna una promesa.
  return cache.addAll([
    //addAll para agregar varios elementos.
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

//promesa para buscar en cache
async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request); //preguntamos al cache si ya existe una copia del request.
  return response || fetch(request);
}

//promesa para reiniciar la cache
async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request); //esperamos una nueva peticion fetch para actualizar el cache
  return cache.put(request, response); //cache.put permite agregar nuevos elementos a la cache.
}
