import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HatsPage from './pages/HatsPage/HatsPage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/HomePage/Header/Header';
import AuthPage from './pages/AuthPage/Authpage';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/hats" element={<HatsPage />} />
                <Route path="/login" element={<AuthPage />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
