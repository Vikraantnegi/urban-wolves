/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HatsPage from './pages/HatsPage/HatsPage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/HomePage/Header/Header';
import AuthPage from './pages/AuthPage/Authpage';
import { auth, createUser } from './firebase'

function App() {

  const [ user, setUser ] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged( async user => {
      if(user){
        const userRef = await createUser(user);
        userRef.onSnapshot(snapshot => {
          setUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else{
        setUser(null)
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
          <Header user={user} />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/hats" element={<HatsPage />} />
              <Route path="/login" element={<AuthPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
