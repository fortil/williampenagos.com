import { messaging, firestore, fire, functions } from './firebase';
import swal from 'sweetalert';

export default function Messaging() {
	const msg = messaging();
	msg
		.requestPermission()
		.then(() => {
			swal(
				'You will receive a message',
				'You will receive a message in a few seconds, close the tab',
				'info'
			).then(() => {
				setTimeout(askingFor, 6000);
			});
		})
		.catch((err) => {
			swal('There is a error', JSON.stringify(err), 'error');
		});
}
function askingFor() {
	const msg = messaging();
	msg
		.getToken()
		.then((currentToken) => {
      if (currentToken) {
        sendTokenToServer(currentToken);
			} else {
				swal('not token', 'there is not token', 'warning');
			}
		})
		.catch((err) => {
			swal('There is a error', JSON.stringify(err), 'error');
		});
	msg.onTokenRefresh(() => {
		msg
			.getToken()
			.then((refreshedToken) => {
				sendTokenToServer(refreshedToken);
			})
			.catch((err) => {
				swal('There is a error', JSON.stringify(err), 'error');
			});
	});
  msg.onMessage((payload) => {
		swal('Llegó mensaje', 'Para verlo en segundo plano por favor cierre la pestaña', 'info');
	});
}

export const navID = () => navigator.userAgent.replace(/(\s|\.|#|\$|\\|\[|\]|\(|\)|\/|;|,|:|\?|\*|&|\+|!|¡|\?)/g, '_');

function sendTokenToServer(token) {
  console.log('sendTokenToServer =====')
  const timestamp = fire.firestore.FieldValue.serverTimestamp();
  firestore.collection('navigators').doc(navID()).set({ token, timestamp }).catch((error) => {
    console.log('hola error', error)
		swal('There is a error', JSON.stringify(error), 'error');
  });
  console.log('llegó por fire parte')
	const addMessage = functions().httpsCallable('addMessage');
  addMessage({ token }).then((result) => {
		console.log(result);
  }).catch((error) => {
    console.log('hola error', error)
    swal('There is a error', JSON.stringify(error), 'error');
  });
}
