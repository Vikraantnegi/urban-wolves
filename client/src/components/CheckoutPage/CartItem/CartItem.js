import React from 'react'
import { connect } from 'react-redux'
import { removeItem, addItem, decreaseItem } from '../../../redux/cart/cartActions'
import './CartItem.scss'

const CartItem = (props) => {
    const { item, removeItem, addItem, decreaseItem } = {...props}
    const { id, imageUrl, price, name, qty } = {...item}

    return (
        <div className='checkout-item'>
            <div className='image'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <div className='qty'>
                <div className='arrow' onClick={() => decreaseItem(id)}>&#10094;</div>
                <span className='value'>{qty}</span>
                <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
            </div>
            <span className='price'>${price}</span>
            <div className='remove' onClick={() => removeItem(id)}>&#10006;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: id => dispatch(decreaseItem(id))
})

export default connect(null, mapDispatchToProps)(CartItem)