import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDMm8CZsCQBwnvPijb4JqU7jsx9o9qOUyY",
  authDomain: "instagram-clone-c81fe.firebaseapp.com",
  databaseURL: "https://instagram-clone-c81fe.firebaseio.com",
  projectId: "instagram-clone-c81fe",
  storageBucket: "instagram-clone-c81fe.appspot.com",
  messagingSenderId: "908279484081",
  appId: "1:908279484081:web:03930c40f802819b955c90",
  measurementId: "G-C3XJRM76YB",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
