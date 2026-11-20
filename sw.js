// Hardwood Dynasty offline cache. Bump VERSION whenever index.html changes.
const VERSION="hd-v18";
const SHELL=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>!k.startsWith(VERSION)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const url=new URL(r.url);
  if(url.origin===location.origin){
    // Always try the network first for the Firebase settings file, so edits take effect right away.
    if(url.pathname.endsWith("/firebase-config.js")){e.respondWith(fetch(r).then(res=>{const copy=res.clone();if(res.ok)caches.open(VERSION).then(c=>c.put(r,copy));return res;}).catch(()=>caches.match(r)));return;}
    e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{const copy=res.clone();caches.open(VERSION).then(c=>c.put(r,copy));return res;}).catch(()=>caches.match("./index.html"))));
    return;}
  // Firebase library files: cache so the app still opens offline.
  if(url.hostname==="www.gstatic.com"&&url.pathname.startsWith("/firebasejs/")){
    e.respondWith(caches.open(VERSION+"-lib").then(c=>c.match(r).then(hit=>hit||fetch(r).then(res=>{c.put(r,res.clone());return res;}))));return;}
  if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.open(VERSION+"-fonts").then(c=>c.match(r).then(hit=>hit||fetch(r).then(res=>{c.put(r,res.clone());return res;}))));}
});
