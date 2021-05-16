import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDbxB2jnqCAPQY8UonTdsTzuEE1zKsKi_M",
    authDomain: "ecom-clothing-4621c.firebaseapp.com",
    projectId: "ecom-clothing-4621c",
    storageBucket: "ecom-clothing-4621c.appspot.com",
    messagingSenderId: "689373601155",
    appId: "1:689373601155:web:63cbe8a0077bf097abaab6",
    measurementId: "G-6K7VL4EET4"
  };

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase;
