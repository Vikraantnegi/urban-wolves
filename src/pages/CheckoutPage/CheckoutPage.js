import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../../components/CheckoutPage/CartItem/CartItem'
import StripeButton from '../../components/CheckoutPage/StripeButton/StripeButton'
import { calculateQty, calculateTotal } from '../../utils/common'
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
            <div className='test-creds'>
                *Please use the following test credit card for payments* <br />
                4000 0566 5566 5556 - Expiry: 05/26 - CVV: 770 
            </div>
            <StripeButton totalAmount={totalAmount} />
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    totalAmount: calculateTotal(state.cart.cartItems)
})

export default connect(mapStateToProps)(CheckoutPage)