'use strict';
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

exports.addMessage = functions.https.onCall((data, context) => {
	let registrationToken = data.token;
	let options = {
		delay_while_idle: true,
		priority: 'normal',
		timeToLive: 60 * 60 * 24 * 3
	};

	let payload = {
		notification: {
			title: '¡Bienvenid@ a williampenagos.com!',
			body: 'Bienvenido a mi página, has probado con éxito las push notifications.',
			icon: '/static/icons/144.png',
			click_action: `https://www.williampenagos.com/`
		},
		data: {
			ejemplo: 'Esto es una data'
		}
	};
	return admin.messaging().sendToDevice('' + registrationToken, payload, options).then((evt) => {
		return evt.results;
	});
});
