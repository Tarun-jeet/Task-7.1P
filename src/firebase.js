
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAJDe3qhBLdo9Ht_9O1w66pKu56qWbdaaM",
    authDomain: "loginpage-ffb24.firebaseapp.com",
    projectId: "loginpage-ffb24",
    storageBucket: "loginpage-ffb24.firebasestorage.app",
    messagingSenderId: "1069998060396",
    appId: "1:1069998060396:web:c4bb2131fc3f31970fb949"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); 

export { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, db, doc, setDoc, getDoc };

   

