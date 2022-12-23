'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "451395085a36130cad76676c89261e20",
"assets/assets/about/Banner%2520Principal.png": "e74f13503950f922b0e472834a9adf4d",
"assets/assets/about/BG_Libertad%2520financiera.png": "24c1b6850d6057a3b265daa4042fb59b",
"assets/assets/about/Laptop.png": "26bfef99fe0847b879b422c517fd834b",
"assets/assets/about/Movil_crear_cuenta.png": "42ce71155f1db59dd3df4be1a9ccfa8b",
"assets/assets/about/Simbolo-Metadollar-3D.png": "70ac26218f5706c466aa4fd0f497a0fa",
"assets/assets/about/Tablet.png": "7980826c7ee00880709e6b357330ea91",
"assets/assets/home/BG_agregar_retirar_recibir_fondos.png": "7e68f139147167eeffddeab406372bab",
"assets/assets/home/BG_banner_principal.png": "efdf617b31dedcc75ed9d70274f6f84f",
"assets/assets/home/BG_como_comenzar.png": "bf2bbb83c81b5b56d0ec2612316d7e3d",
"assets/assets/home/Crear_cuenta.png": "9c1e5be793ca202c76377b0913a1cf67",
"assets/assets/home/Dashboard_metagiros.png": "1e96160b9b3e057a04552f307978eb52",
"assets/assets/home/icons/Icon%2520Google.png": "8d76e45aaadf427c073604ddf54008b8",
"assets/assets/home/icons/Icon%2520IG.png": "b3dc7a33fcef5565f00c906c715e1231",
"assets/assets/home/icons/Icon%2520Linkedin.png": "ec2db482f851a50e1e2578868596ee7f",
"assets/assets/home/icons/Icon%2520Twitter.png": "15fe4c4f67f5cd3ac4deaa719d0102a2",
"assets/assets/home/icons/icon_blog.png": "901e2a8a24deab545f67f39f12bc6864",
"assets/assets/home/icons/Icon_Facebook.png": "027f7a6e3e1d3316acd0e76453337ac3",
"assets/assets/home/icons/icon_fast.png": "60bd5299a848b7648cdf48ff06c4ba8a",
"assets/assets/home/icons/icon_money.png": "ade56727847cea5da5f4df1552ff66ed",
"assets/assets/home/icons/icon_padlock.png": "741fc2e7b5a5be352090876bc10696fc",
"assets/assets/home/icons/icon_play.png": "6199683f606949e35413d8baa17809ba",
"assets/assets/home/icons/icon_questions.png": "aafa44a2a998c4b78ecf8a0d0342a1aa",
"assets/assets/home/icons/icon_right.png": "58eb6d1d230102fa7275cff7501c5001",
"assets/assets/home/icons/icon_security.png": "7c9592f7497504df7d4f2cee0a173e99",
"assets/assets/home/icons/icon_unete.png": "3e343ef709014555889ee292e802fda4",
"assets/assets/home/icons/icon_web.png": "18ddf98abd554db75a8f4b6b526f9439",
"assets/assets/home/img_agg_fondos.png": "6d70cdabe122e036a857f86b838e0328",
"assets/assets/home/img_agg_rec_fondos.png": "bb5d5640d598bd4e4cbcdffccf1705ef",
"assets/assets/home/img_ret_fondos.png": "c1c4dbcebefb7f9c970cb908dbccb8ce",
"assets/assets/home/Logo_black_white01.png": "f7ee9efa2ed21993d0024936400cff4b",
"assets/assets/home/Logo_metagiros_white.png": "60ead96e23d1bb240b83e4ff8fbbb22f",
"assets/assets/home/MetaGiros.png": "81dd0307b8145a206e2cd73a5c8d1871",
"assets/assets/home/Simbolo-MetaGiros.png": "5694679f62a7e1dde2e3e85877b12eca",
"assets/assets/home/team/BG_info_Anllela.png": "5813fe540e5476ac621ed15affb4366f",
"assets/assets/home/team/BG_info_isa.png": "73bba389b77536e4ec52b3213dd073c8",
"assets/assets/home/team/BG_info_Jaiver.png": "8170022c5e785a50368250acb8d319f4",
"assets/assets/home/team/BG_info_luismar.png": "813667341d70c4402f5dbd7db2363bfd",
"assets/assets/home/team/BG_info_marlon.png": "8ee3094bb9b8a410e1332318452bfadc",
"assets/assets/what_to_do/Banner%2520Principal.png": "e74f13503950f922b0e472834a9adf4d",
"assets/assets/what_to_do/BG_experiencia_metagiros.png": "cdeedbe417a1fe429f28d8dd2ec67848",
"assets/assets/what_to_do/img_agg_fondos.png": "6d70cdabe122e036a857f86b838e0328",
"assets/assets/what_to_do/img_agg_rec_fondos.png": "bb5d5640d598bd4e4cbcdffccf1705ef",
"assets/assets/what_to_do/img_embajadores.png": "e3a82faf8000809ba60ae79bf536bdc7",
"assets/assets/what_to_do/img_ingresos_extras.png": "ee1fbce219497166d034d4e0ab707930",
"assets/assets/what_to_do/img_promociones.png": "d462360f89e81978c64ecab079a2294f",
"assets/assets/what_to_do/img_referidos.png": "5433b6610c334edd23c02cd10f4c4e78",
"assets/assets/what_to_do/img_ret_fondos.png": "c1c4dbcebefb7f9c970cb908dbccb8ce",
"assets/assets/what_to_do/img_ser_cajero.png": "32e381568aa393f97ea7fc979cec130a",
"assets/assets/what_to_do/img_vende%2520cripto.png": "8c9553a29c5798a366e760790a75effd",
"assets/assets/what_to_do/Movil_mano.png": "0b2b0200966981b9df3b3adffd0e6d34",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2d748fb7917e4ee825236408d6a79fbf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "d573fb9127222cf649210b0c88050b59",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "e4177a045c40467473b9d25dc2d6b794",
"icons/Icon-512.png": "52649954bd120baa7c559ffea2f15c17",
"icons/Icon-maskable-192.png": "c4d439f678fad404164f920a01cc0f9b",
"icons/Icon-maskable-512.png": "4815153dbd87f0d7760e42cc0156569b",
"index.html": "3892a65234854f93c71f917b3124e382",
"/": "3892a65234854f93c71f917b3124e382",
"main.dart.js": "249c87b9ddf5d6e7a316268243c91955",
"manifest.json": "d80e37b386908dc44665ae7046dc9d84",
"version.json": "444c74c44d3b000ac7efe390a9ae5a76"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
