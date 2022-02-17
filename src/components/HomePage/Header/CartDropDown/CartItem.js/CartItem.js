import React from 'react'
import './CartItem.scss'

const CartItem = (props) => {
    const { item } = {...props}
    const { imageUrl, price, name, qty } = {...item}
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span className='item-name'>{name}</span>
                <span className='item-price'> {qty} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem