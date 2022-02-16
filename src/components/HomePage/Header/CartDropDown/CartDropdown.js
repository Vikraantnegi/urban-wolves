import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../../../AuthPage/CustomButton/CustomButton'
import './CartDropdown.scss'

const CartDropdown = (props) => {
  const { cartItems } = {...props}
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        </div>
        <CustomButton type='button'>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown)