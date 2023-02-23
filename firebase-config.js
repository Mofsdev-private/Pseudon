import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9e4eH4mx0DiGQe2iVfdLr_bwUpmFRTP4",
    authDomain: "pseudon-9ce55.firebaseapp.com",
    projectId: "pseudon-9ce55",
    storageBucket: "pseudon-9ce55.appspot.com",
    messagingSenderId: "335821480118",
    appId: "1:335821480118:web:40648c9e3d56b123ec8617",
    measurementId: "G-PKG6S1TK44"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

  