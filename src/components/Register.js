import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, firestore } from '../firebase'; 
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore'; 
import { Link } from 'react-router-dom'; 
import './Register.css';
import image from '../images/google.png';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); 
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
       
        navigate('/login');
      })
      .catch((error) => {
        alert("Error during Google sign-in: " + error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        setDoc(doc(firestore, 'users', user.uid), {
          username: username,
          email: email,
          createdAt: new Date()
        }).then(() => {
          
          navigate('/login');
        }).catch((error) => {
          alert("Error saving username to Firestore: " + error.message);
        });
      })
      .catch((error) => {
        alert("Error during registration: " + error.message);
      });
  };

  return (
    <div className="auth-container">
      <h2>DEV@Deakin SignUp</h2>
      <button onClick={handleGoogleSignIn} className="google-btn"><img src={image} alt="Google Logo" className="google-logo" />Google SignUp</button>
      <h3>OR</h3>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="register-btn">Register</button>
      </form>
      <p className="down">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
