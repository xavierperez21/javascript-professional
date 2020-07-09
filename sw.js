const VERSION = "v1";

self.addEventListener('install', event => { // 'self' is like 'this' but for service workers
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if (request.method !== "GET") {
        return;
    }

    // Search in cache
    event.respondWith(cachedResponse(request))

    // Update cache
    event.waitUntil(updateCache(request))

})

async function precache () {
    const cache = await caches.open(VERSION);  // caches.open generates an instance of a cache that will be called "v1", but this returns a promise and we handle the response with async-await
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.ts',
        // '/assets/index.css',
        // '/assets/favicon.ico',
        // '/assets/BigBuckBunny.mp4',
    ])

}

async function cachedResponse (request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);  // We add this fetch(request) in case we add another asset that we haven't cached, so this will do the request normally from internet. This is to prevent that the page never loads that new asset
}

async function updateCache (request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}