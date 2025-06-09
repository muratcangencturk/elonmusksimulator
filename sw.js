const CACHE_NAME = 'elonmusksimulator-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/questions.js',
  '/new_questions_batch1.js',
  '/new_questions_batch2.js',
  '/new_questions_batch3.js',
  '/new_questions_batch4.js',
  '/new_questions_batch5.js',
  '/normalize_questions.js',
  '/elon_musk_angry.png',
  '/elon_musk_cartoon.png',
  '/elon_musk_happy.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
