import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDbWjHRQ8RuMGkrPePZ7VjZVbsO1siQZOc",
    authDomain: "revisedlogin.firebaseapp.com",
    projectId: "revisedlogin",
    storageBucket: "revisedlogin.firebasestorage.app",
    messagingSenderId: "197422415204",
    appId: "1:197422415204:web:2547839667434d3fc84e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(app); // Initialize Firestore

export { auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, firestore };
