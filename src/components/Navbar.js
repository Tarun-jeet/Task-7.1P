import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Navbar({ title, one, two, place, isAuthenticated, handleLogout }) {
  const navigate = useNavigate();

  const handleAuthButtonClick = () => {
    if (isAuthenticated) {
     
      signOut(auth)
        .then(() => {
          handleLogout(); 
          navigate('/'); 
        })
        .catch((error) => {
          alert("Error logging out: " + error.message);
        });
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div className="Navbar">
      <span className="one">{title}</span>
      <input type="text" placeholder={place} />
      <button>{two}</button>
      <button onClick={handleAuthButtonClick}>{one}</button>
      <button onClick={() => navigate('/')}>HOME</button>
    </div>
  );
}
