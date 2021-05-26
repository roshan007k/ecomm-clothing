import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
  apiKey: "AIzaSyBz4RvxRDs8zgU2DlhjVKZxbWwhJt-Io1U",
  authDomain: "ecom-cloths.firebaseapp.com",
  projectId: "ecom-cloths",
  storageBucket: "ecom-cloths.appspot.com",
  messagingSenderId: "657055320637",
  appId: "1:657055320637:web:bf11916a8e244d860fb854",
  measurementId: "G-BJEGY01C5Q"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
