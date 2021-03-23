import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBLZ1MjGR-9naCsqeMjQIppEwkM9qZVMUY",
  authDomain: "marielou-react.firebaseapp.com",
  projectId: "marielou-react",
  storageBucket: "marielou-react.appspot.com",
  messagingSenderId: "662884818716",
  appId: "1:662884818716:web:3b56dcf4df22f388e064d9"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
