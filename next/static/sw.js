importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '615266342210' //
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/icons/144.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

if (!workbox) {
	console.error('ServiceWorker failed to load workbox');
} else {
	workbox.skipWaiting();
	workbox.clientsClaim();

	workbox.routing.registerRoute(
		/^https:\/\/fonts\.gstatic\.com/,
		workbox.strategies.cacheFirst({
			cacheName: 'google-fonts-webfonts',
			plugins: [
				new workbox.cacheableResponse.Plugin({
					statuses: [ 0, 200 ]
				}),
				new workbox.expiration.Plugin({
					maxAgeSeconds: 60 * 60 * 24,
					maxEntries: 30
				})
			]
		})
	);

	workbox.routing.registerRoute(
		/\.(?:png|gif|jpg|jpeg|svg)$/,
		workbox.strategies.cacheFirst({
			cacheName: 'images',
			plugins: [
				new workbox.expiration.Plugin({
					maxEntries: 60,
					maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
				})
			]
		})
	);
	workbox.routing.registerRoute(
		new RegExp('/_next/(.*)'),
		workbox.strategies.networkFirst({
			cacheName: 'bundled-content'
		})
	);

	// cache static files
	workbox.routing.registerRoute(
		new RegExp('/static/(.*)'),
		workbox.strategies.cacheFirst({
			cacheName: 'static',
			plugins: [
				new workbox.expiration.Plugin({
					maxEntries: 60,
					maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
				})
			]
		})
	);

	// offline analytics
	workbox.googleAnalytics.initialize();
}
