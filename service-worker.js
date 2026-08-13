const CACHE='mimibe-20260813-baby-mode-budget-v1';
const APP_SHELL=["./", "./index.html", "./style.css", "./app.js", "./manifest.webmanifest", "./assets/baby-neutral.webp", "./assets/baby-pink.webp", "./assets/baby-blue.webp", "./assets/mimibe-logo.svg", "./assets/reveal-hand.webp", "./assets/reveal-feet.webp", "./assets/booties-pink.webp", "./assets/booties-blue.webp", "./pwa-icons/icon-192.png", "./pwa-icons/icon-512.png"];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;

  const url=new URL(event.request.url);

  // Externí video modul a ostatní CDN požadavky se nikdy neukládají do PWA cache.
  if(url.origin!==self.location.origin)return;

  event.respondWith(
    caches.match(event.request).then(cached=>{
      if(cached)return cached;
      return fetch(event.request).then(response=>{
        if(response && response.ok && response.type==='basic'){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        }
        return response;
      }).catch(()=>caches.match('./index.html'));
    })
  );
});


self.addEventListener('notificationclick',event=>{
  event.notification.close();
  event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
    for(const client of list){if('focus' in client)return client.focus();}
    if(clients.openWindow)return clients.openWindow('./');
  }));
});
