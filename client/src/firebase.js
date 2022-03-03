import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVch38m9n1r7yS8ye4gnY7YKzzxULGoR8",
  authDomain: "urbanwolves-db-b1c93.firebaseapp.com",
  projectId: "urbanwolves-db-b1c93",
  storageBucket: "urbanwolves-db-b1c93.appspot.com",
  messagingSenderId: "277645826354",
  appId: "1:277645826354:web:41e88cf6ac1d8ad0069f2b",
  measurementId: "G-11F25Y1PCG"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUser = async (userAuth, data) => {
  if(!userAuth) return;
  
  const userRef = fireStore.doc(`users/${userAuth.uid}`)
  const userSnap = await userRef.get();

  if(!userSnap.exists){
    const { displayName, email, photoURL } = userAuth;
    const createdTime = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdTime,
        ...data
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }
    
  return userRef;
}