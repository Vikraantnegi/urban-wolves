import React from 'react'
import './CartItem.scss'

const CartItem = (props) => {
    const { item } = {...props}
    const { imageUrl, price, name, qty } = {...item}

    return (
        <div className='checkout-item'>
            <div className='image'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='qty'>{qty}</span>
            <span className='price'>{price}</span>
            <div className='remove'>&#10006;</div>
        </div>
    )
}

export default CartItem