// src/firebase.js
import { initializeApp } from 'firebase/app';
// I now extend this file to include Firestore

import { getFirestore } from 'firebase/firestore';

// MpatiQ's web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCq_0JutGvN2dWjSwaOXjWsRZ0kI0w1KCY',
  authDomain: 'mpatiq-dc2d1.firebaseapp.com',
  projectId: 'mpatiq-dc2d1',
  storageBucket: 'mpatiq-dc2d1.firebasestorage.app',
  messagingSenderId: '1030735134829',
  appId: '1:1030735134829:web:d7d3806fb58a9908d47f64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance

// export default app;
// No longer exporting the entire app. We will now export instances of the app, and set the stage for modular instance exportations, i.e when we need auth or storage it becomes export{db,auth, storage}; and elsewhere `import {db} from './firebase';`

export { db };
