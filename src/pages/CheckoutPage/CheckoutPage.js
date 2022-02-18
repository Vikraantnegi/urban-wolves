import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../../components/HomePage/Header/CartDropDown/CartItem.js/CartItem'
import './CheckoutPage.scss'

const CheckoutPage = (props) => {
    const { cartItems, totalAmount } = {...props}
    return (
        <div className='checkout'>
            <div className='checkout-header'>
                <div className='header-tab'>
                    <span>Product</span>
                </div>
                <div className='header-tab'>
                    <span>Description</span>
                </div>
                <div className='header-tab'>
                    <span>Quantity</span>
                </div>
                <div className='header-tab'>
                    <span>Price</span>
                </div>
                <div className='header-tab'>
                    <span>Remove</span>
                </div>
            </div>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                            />
                        )) :
                        <span className='empty-message'>Your cart is empty!</span>
                }
            </div>
            <div className='total'>
                <span> Total Amount: ${totalAmount} </span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    totalAmount: state.cart.cartItems.reduce((total, item) => total + item.qty * item.price, 0)
})

export default connect(mapStateToProps)(CheckoutPage)