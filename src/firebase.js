import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZaJnvvEwR2bgmulLLKHeWP5Bwcs3306w",
  authDomain: "instagramclone-f96df.firebaseapp.com",
  projectId: "instagramclone-f96df",
  storageBucket: "instagramclone-f96df.appspot.com",
  messagingSenderId: "320518798692",
  appId: "1:320518798692:web:7031963d700b856d2b8e71",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
