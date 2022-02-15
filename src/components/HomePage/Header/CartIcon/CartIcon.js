import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import './CartIcon.scss'

const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <BsHandbag className='shopping-icon' />
      <div className='item-count'><span>0</span></div>
    </div>
  )
}

export default CartIcon
