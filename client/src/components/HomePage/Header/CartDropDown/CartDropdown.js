import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../../../AuthPage/CustomButton/CustomButton'
import './CartDropdown.scss'
import CartItem from './CartItem.js/CartItem'
import { useNavigate } from 'react-router-dom'
import { toggleCartModal } from '../../../../redux/cart/cartActions'

const CartDropdown = (props) => {
  const { cartItems, toggleCartModal } = {...props}
  const navigate = useNavigate()
  return (
    <div className='cart-dropdown'>
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
        <CustomButton type='button'
          onClick={() => {
            navigate('/checkout');
            toggleCartModal()
          }}
        >
          Checkout
        </CustomButton>
    </div> 
  )
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

const matchDispatchToProps = dispatch => ({
  toggleCartModal: () => dispatch(toggleCartModal())
})

export default connect(mapStateToProps, matchDispatchToProps)(CartDropdown)