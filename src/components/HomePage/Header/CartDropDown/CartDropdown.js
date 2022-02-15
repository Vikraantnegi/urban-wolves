import React from 'react'
import CustomButton from '../../../AuthPage/CustomButton/CustomButton'
import './CartDropdown.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        </div>
        <CustomButton type='button'>Checkout</CustomButton>
    </div>
  )
}

export default CartDropdown