// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBngQwkiZR9qJo1dMucPPgIHwJt6nyaeiU",
    authDomain: "whatsapp-kss.firebaseapp.com",
    projectId: "whatsapp-kss",
    storageBucket: "whatsapp-kss.appspot.com",
    messagingSenderId: "233720422878",
    appId: "1:233720422878:web:1dc41e57bcb0845cba3d4f",
    measurementId: "G-4YEN6S78KC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;