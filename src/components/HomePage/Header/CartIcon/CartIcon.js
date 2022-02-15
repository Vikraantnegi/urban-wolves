import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import './CartIcon.scss'

const CartIcon = (props) => {
  const { onClick } = {...props}
  return (
    <div className='cart-icon' onClick={() => onClick()}>
      <BsHandbag className='shopping-icon' />
      <div className='item-count'><span>0</span></div>
    </div>
  )
}

export default CartIcon
