import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYP1eS5piP_b250Msdgo3QVRuRA_zdWXE",
  authDomain: "facebook-clone-81bce.firebaseapp.com",
  databaseURL: "https://facebook-clone-81bce.firebaseio.com",
  projectId: "facebook-clone-81bce",
  storageBucket: "facebook-clone-81bce.appspot.com",
  messagingSenderId: "873827698748",
  appId: "1:873827698748:web:1d5eae7e8c006e8130db39",
  measurementId: "G-QVXFYQSCMH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
