import * as firebase from 'firebase';
import credentials from './credentials'

if (firebase.apps.length === 0) {
  firebase.initializeApp(credentials);
}
const fs = firebase.firestore();
const settings = { timestampsInSnapshots: true };
fs.settings(settings);

export const fire = firebase;
export const auth = firebase.auth();
export const firestore = fs;
export const messaging = firebase.messaging;
export const storage = firebase.storage;
export const functions = firebase.functions;
