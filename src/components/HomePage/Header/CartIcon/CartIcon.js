import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import { connect } from 'react-redux'
import { toggleCartModal } from '../../../../redux/cart/cartActions'
import './CartIcon.scss'

const CartIcon = (props) => {
  const { toggleCartModal } = {...props}
  return (
    <div className='cart-icon' onClick={() => toggleCartModal()}>
      <BsHandbag className='shopping-icon' />
      <div className='item-count'><span>0</span></div>
    </div>
  )
}

const matchDispatchToProps = dispatch => ({
  toggleCartModal: () => dispatch(toggleCartModal())
})

export default connect(null, matchDispatchToProps)(CartIcon);
