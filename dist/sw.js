if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const t=e=>s(e,o),a={module:{uri:o},exports:l,require:t};i[o]=Promise.all(r.map((e=>a[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-68b9963c.css",revision:null},{url:"assets/index-99012f55.js",revision:null},{url:"assets/MyEditor-2626b850.js",revision:null},{url:"assets/MySimulator-82875070.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"7d330e4469a1336f9aee319eaf315ab3"},{url:"rime.js",revision:"0a3721b60d97c6296cac879363ad5ce9"},{url:"worker.js",revision:"0d8df1ee73ea424429a4a058b53d9785"},{url:"apple-touch-icon.png",revision:"6e5ceec116ccdbcf2c8ef8a2ee6e815f"},{url:"rime.data",revision:"7db418c7717cc319de2d7a5a54f12c06"},{url:"rime.wasm",revision:"ed606729197217a9f0281e9962536693"},{url:"LibreService.svg",revision:"3bbd71af5b012e283fb5eef01996e393"},{url:"manifest.webmanifest",revision:"601750cd7a6ae8dfc3e0ae74a400eb7f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
