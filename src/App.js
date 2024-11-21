import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ArticleArray from './components/ArticleArray';
import TutorialArray from './components/TutorialArray';
import Subscription from './components/Subscription';
import Bottom from './components/Bottom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    
  };

  return (
    <Router>
      <Navbar
        title="DEV@Deakin"
        two="POST"
        one={isAuthenticated ? "LOG OUT"  : "LOG IN"}
        place="Search..."
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <ArticleArray />
              <TutorialArray />
              <Subscription />
              <Bottom />
            </>
          }
        />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}  />} />
        
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
