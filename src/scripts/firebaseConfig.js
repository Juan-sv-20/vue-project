// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5CiYF-0KoZQOo61nTeQ5LF-Ig7s0LwAM",
  authDomain: "vegans-474d9.firebaseapp.com",
  databaseURL: "https://vegans-474d9-default-rtdb.firebaseio.com",
  projectId: "vegans-474d9",
  storageBucket: "vegans-474d9.appspot.com",
  messagingSenderId: "246445801132",
  appId: "1:246445801132:web:5b6e4212ea98976292e909",
  measurementId: "G-T694K0C5YY"
};

firebase.default.initializeApp(firebaseConfig);