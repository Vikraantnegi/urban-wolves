import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../static/images/wolf3.png'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <Link className="header-logo" to='/'>
                <img src={Logo} className="logo" alt="urban-wolves"  />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/contact'>Contact</Link>
                <Link className="option" to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Header;