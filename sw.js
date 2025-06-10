const CACHE_NAME = 'elon-sim-cache-v1';
const ASSETS = [
  './',
  'index.html',
  'style.css',
  'main.js',
  'questions.json',
  'new_questions_batch1.json',
  'new_questions_batch2.json',
  'new_questions_batch3.json',
  'new_questions_batch4.json',
  'new_questions_batch5.json',
  'elon_musk_cartoon.png',
  'elon_musk_happy.png',
  'elon_musk_angry.png',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
