import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAetce77JFv1zkheBJj-1btpB9_qhGNYFg",
  authDomain: "urbanwolves-db.firebaseapp.com",
  projectId: "urbanwolves-db",
  storageBucket: "urbanwolves-db.appspot.com",
  messagingSenderId: "1029185855183",
  appId: "1:1029185855183:web:883a4598fd6efeb552e1ba"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);