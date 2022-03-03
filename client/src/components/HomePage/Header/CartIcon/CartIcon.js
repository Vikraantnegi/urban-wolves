import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import { connect } from 'react-redux'
import { toggleCartModal } from '../../../../redux/cart/cartActions'
import { calculateQty } from '../../../../utils/common'
import './CartIcon.scss'

const CartIcon = (props) => {
  const { toggleCartModal, totalItems } = {...props}
  return (
    <div className='cart-icon' onClick={() => toggleCartModal()}>
      <BsHandbag className='shopping-icon' />
      <div className='item-count'><span>{ totalItems }</span></div>
    </div>
  )
}

const mapStateToProps = state => ({
  totalItems: calculateQty(state.cart.cartItems)
})

const matchDispatchToProps = dispatch => ({
  toggleCartModal: () => dispatch(toggleCartModal())
})

export default connect(mapStateToProps, matchDispatchToProps)(CartIcon);
