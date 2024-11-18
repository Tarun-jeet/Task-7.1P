import React, { useEffect, useState } from 'react';
import { auth, db, getDoc, doc } from './firebase';
import './App.css';

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserInfo(userDoc.data());
        }
      }
    };
    fetchUserInfo();
  }, [user]);

  return (
    <div>
      <h1>Welcome {userInfo ? userInfo.username : user ? user.email : 'Guest'}</h1>
    </div>
  );
};

export default Home;
