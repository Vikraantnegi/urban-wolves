import React from 'react'
import CustomButton from '../../AuthPage/CustomButton/CustomButton'
import './ClothingItem.scss'

const ClothingItem = ({item}) => {
    const { name, imageUrl, price } = {...item}
    return (
        <div className='collection-item'>
            <div 
                className='item-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='item-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton customClass='inverted'>Add To Cart</CustomButton>
        </div>
    )
}

export default ClothingItem