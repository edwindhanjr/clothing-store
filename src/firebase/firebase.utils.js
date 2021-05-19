import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCzqdvDSBDlq_J1enBn3jduYj2uV9whzow",
    authDomain: "clothing-store-8ba6e.firebaseapp.com",
    projectId: "clothing-store-8ba6e",
    storageBucket: "clothing-store-8ba6e.appspot.com",
    messagingSenderId: "350930923148",
    appId: "1:350930923148:web:49ebe68761a8592f9dd5a9",
    measurementId: "G-GPM8KC6HK6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;

