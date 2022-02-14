/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HatsPage from './pages/HatsPage/HatsPage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/HomePage/Header/Header';
import AuthPage from './pages/AuthPage/Authpage';
import { auth, createUser } from './firebase'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';

function App(props) {
  const { setCurrentUser, user } = {...props}
  useEffect(() => {
    auth.onAuthStateChanged( async user => {
      if(user){
        const userRef = await createUser(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else{
        setCurrentUser(null)
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/hats" element={<HatsPage />} />
              <Route path="/login" element={ user ? <Navigate to="/" /> : <AuthPage />} />
          </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
