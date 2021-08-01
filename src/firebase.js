// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBf6xrWPG8Es3E8KLTPWzSEZibImVYpA9E",
  authDomain: "bookflick-15502.firebaseapp.com",
  projectId: "bookflick-15502",
  storageBucket: "bookflick-15502.appspot.com",
  messagingSenderId: "1003762772052",
  appId: "1:1003762772052:web:86ff084eb0af16905125c1",
  measurementId: "G-QEZNYLF8SE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
