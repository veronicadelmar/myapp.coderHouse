import firebase from 'firebase/app'
//import 'firebase/firestore'
  
//import firebase from "firebase/app";
import '@firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyArkqK55Reop4JA1n06RWubnCur5Fm3eXo",
    authDomain: "coderhouse-ecommercevg.firebaseapp.com",
    projectId: "coderhouse-ecommercevg",
    storageBucket: "coderhouse-ecommercevg.appspot.com",
    messagingSenderId: "947359755795",
    appId: "1:947359755795:web:05c001ad77f205fa2619e6"
};

const app = firebase.initializeApp(firebaseConfig)
  
export const getFirebase = () => app;
export const getFireStore = () => firebase.firestore(app);