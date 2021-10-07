import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCDsGMlPpyqCno142v1SMLLvcTsQ8ABuew",
    authDomain: "messenger-b445a.firebaseapp.com",
    projectId: "messenger-b445a",
    storageBucket: "messenger-b445a.appspot.com",
    messagingSenderId: "265829662742",
    appId: "1:265829662742:web:664afb244618fcb6c7f537",
    measurementId: "G-KRJ4HZBNRQ"

});

const db = firebaseApp.firestore();

export default db;