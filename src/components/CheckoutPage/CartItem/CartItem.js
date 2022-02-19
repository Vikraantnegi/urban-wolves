import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../../../redux/cart/cartActions'
import './CartItem.scss'

const CartItem = (props) => {
    const { item, removeItem } = {...props}
    const { id, imageUrl, price, name, qty } = {...item}

    return (
        <div className='checkout-item'>
            <div className='image'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='qty'>{qty}</span>
            <span className='price'>${price}</span>
            <div className='remove' onClick={() => removeItem(id)}>&#10006;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id))
})

export default connect(null, mapDispatchToProps)(CartItem)