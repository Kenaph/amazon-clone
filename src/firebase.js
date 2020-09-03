import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMaboU1Gz4TgRF-w4EXp2mNAz95SnzsI8",
  authDomain: "clone-525f8.firebaseapp.com",
  databaseURL: "https://clone-525f8.firebaseio.com",
  projectId: "clone-525f8",
  storageBucket: "clone-525f8.appspot.com",
  messagingSenderId: "614789567611",
  appId: "1:614789567611:web:17306d978698ea076c7ede",
  measurementId: "G-DW2VELBH9Q",
});

const auth = firebase.auth();

export { auth };
