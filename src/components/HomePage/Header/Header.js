import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../static/images/wolf3.png'
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import './Header.scss'
import CartIcon from "./CartIcon/CartIcon";
import CartDropdown from "./CartDropDown/CartDropdown";

const Header = (props) => {
    const navigate = useNavigate();
    const { user, cartModal } = {...props};
    const signOut = () => {
        auth.signOut();
        navigate('/shop')
    }

    return (
        <div className="header">
            <Link className="header-logo" to='/'>
                <img src={Logo} className="logo" alt="urban-wolves"  />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/contact'>Contact</Link>
                {
                    user ? (
                        <div className="option" onClick={() => signOut()}>Sign Out</div>
                    ) : (
                        <Link className="option" to='/login'>Sign In</Link>                        
                    )
                }
                <CartIcon />
            </div>
            {cartModal ? <CartDropdown /> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
    cartModal: state.cart.cartModal
})

export default connect(mapStateToProps)(Header);