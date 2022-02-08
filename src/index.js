import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HatsPage from './pages/HatsPage/HatsPage';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop/hats" element={<HatsPage />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
