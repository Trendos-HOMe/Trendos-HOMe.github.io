'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4be27fb5a5189aa720be656dc90e5e1e",
"assets/assets/fonts/Anurati-Regular.otf": "ca8632f4d0aacae4633cbfc2f1a673f1",
"assets/assets/Icons/anonymous.png": "9659b4d2cd32a3b3fa4b7e53c118c3ae",
"assets/assets/Icons/cart.png": "806f542ddcc060e939e2c3d2cf2b58b4",
"assets/assets/Icons/categories.png": "7ce9420e29bbfa27b8e4a8a40d575c6e",
"assets/assets/Icons/edit.png": "e5746e6163957c3a900efbb64e1d1e5f",
"assets/assets/Icons/email%25201.png": "fb1bee4e43b21a61fbfe090892b64115",
"assets/assets/Icons/error.png": "120cc167873e0b66cfa56c1d7d5431d6",
"assets/assets/Icons/eye.png": "bb8e6498d17a21face18972834122eed",
"assets/assets/Icons/eyeslash.png": "28c8381f4fa169269a046378e44b63bf",
"assets/assets/Icons/free_shipping.png": "25797999024cc98d35dd5dab9d312d35",
"assets/assets/Icons/google.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/Icons/heart.png": "bed171f38bc538c188efa49f41318255",
"assets/assets/Icons/home.png": "f57db47d10f091d8444fcc4295956854",
"assets/assets/Icons/icons8-walter-white-50.png": "111e87d80ba7de57ced322118c67b79a",
"assets/assets/Icons/id-card.png": "616fa1cfc0657c9ecd6fcd7d7e65031e",
"assets/assets/Icons/img.png": "b0baca6ea97ddc40e2b8730534428f18",
"assets/assets/Icons/instagram.png": "72a4b561233cbeed9b490e76dd57af83",
"assets/assets/Icons/left-arrow.png": "6d1d15a6fcb6c36927cd3114a2159cdb",
"assets/assets/Icons/logout.png": "a9817b1d64b1cb0718ef1ca1f0f450cb",
"assets/assets/Icons/menu.png": "aa6495a8a949baa810b6238a3e0295eb",
"assets/assets/Icons/passwordcheck.png": "7ba122482936e58346c2ce4877c4101c",
"assets/assets/Icons/product.png": "d5010d3e6317b3dd4c9c7aa400447a05",
"assets/assets/Icons/right-arrow.png": "3b6e1869ac79ce4644bc6b83890c6357",
"assets/assets/Icons/telephone.png": "91c5bf318e2109f33be1796a061f0d61",
"assets/assets/Icons/tick.png": "7125d7b67bca49d2e90031568a1c3b1b",
"assets/assets/Icons/tik-tok.png": "5f1413ca184c7e24e1d213fcc43c6a82",
"assets/assets/Icons/tracking.png": "c7ea0a3f98ed85f9844cf72587393440",
"assets/assets/Icons/user.png": "e9ace2e2dac30ed544ae393f52a0a0e0",
"assets/assets/Icons/user2.png": "a48aca275e3dbe9a00d8f90e095f25ae",
"assets/assets/Icons/X.png": "629adbacbc09a1b24270ad1d65b4b3ba",
"assets/assets/images/81.png": "b25c74bd483ad1d67567db3f063605f5",
"assets/assets/images/background.png": "37d2c2a963c4f847ad684e89600bc8a1",
"assets/assets/images/girl_on_form.png": "d35c2edf65ac4b96ad4675027241410c",
"assets/assets/images/profile.png": "739297c3ec0f727c32c8135aca85df15",
"assets/assets/lottie/Loading.json": "719829bb31e38b0107b5ec737edf4fbd",
"assets/FontManifest.json": "0156b79137a0e95d56fd535eee05dad9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/loading.gif": "6d8ddcff565e848515beda699d0bb464",
"assets/NOTICES": "12cf88ae183ab61f177ba3d9de2120cb",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/checkout_screen_ui/assets/images/apple-32.png": "9093edf287db8600bc186e9607916a04",
"assets/packages/checkout_screen_ui/assets/images/card_amex.png": "650359dc6d2af46ed20ccfcdac4719a6",
"assets/packages/checkout_screen_ui/assets/images/card_diners.png": "bfe3fd25d256a0601bd4017ffe9a6f84",
"assets/packages/checkout_screen_ui/assets/images/card_discover.png": "cc6e7458dcfe4f92b84610962c14f81d",
"assets/packages/checkout_screen_ui/assets/images/card_jcb.png": "87c7684e033657125bc99e305077c318",
"assets/packages/checkout_screen_ui/assets/images/card_mastercard.png": "b82d1e23200eb0108333da2d3667e4ef",
"assets/packages/checkout_screen_ui/assets/images/card_union_pay.png": "c986b0160e7b00a20e490a24c56f3ba0",
"assets/packages/checkout_screen_ui/assets/images/card_visa.png": "85d57bb0a82e92e6f4c17a1cd3a84d0a",
"assets/packages/checkout_screen_ui/assets/images/cvv_back.png": "474f6db18bbadfb28bfd98a4e79fc713",
"assets/packages/checkout_screen_ui/assets/images/cvv_front.png": "9169b9b152e3dae3e736f49e56746483",
"assets/packages/checkout_screen_ui/assets/images/G_mark_small.png": "3853bea160f56119432927417c4ed5b2",
"assets/packages/checkout_screen_ui/assets/images/pay_option_cash.png": "32d5c80cdfdd328d831cfad26942a9b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-chrome-192x192.png": "6757547a37843f5f64d770d41d0fc873",
"icons/android-chrome-512x512.png": "924c01e258c28ec64b55240a75f306ae",
"icons/apple-touch-icon.png": "263768184fa7f142d08ce8584723c45c",
"index.html": "8d20c54db708a33ccfc17468b283d214",
"/": "8d20c54db708a33ccfc17468b283d214",
"logo.png": "2b69c2cf3eefd8169a671c8360367744",
"main.dart.js": "454da2246c22a832fa92450b5840ef70",
"manifest.json": "01a1c7064af8e4bb839e1b4f1f88f9dc",
"version.json": "cc6dd881fdc3b79dc84c0b5686451518"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
