import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup } from '../firebase';
import './Login.css';
import image from '../images/google.png';

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>DEV@Deakin Login</h2>
      <button className="google-btn" onClick={handleGoogleLogin}><img src={image} alt="Google Logo" className="google-logo" />Google Login</button>
      <h3>OR</h3>
      <form onSubmit={handleEmailLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <p className="down">
        Don't have an account? <span onClick={() => navigate('/register')} className="link">Register</span>
      </p>
    </div>
  );
}
