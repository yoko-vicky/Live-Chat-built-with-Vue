import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// https://stackoverflow.com/questions/72369451/cannot-read-properties-of-undefined-reading-firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// init firebase
const app = firebase.initializeApp(firebaseConfig);

// init firestore
export const db = app.firestore();
export const timeStamp = app.firestore.FieldValue.serverTimestamp;
