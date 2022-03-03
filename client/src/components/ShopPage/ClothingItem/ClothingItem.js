import React from 'react'
import CustomButton from '../../AuthPage/CustomButton/CustomButton'
import { connect } from 'react-redux'
import './ClothingItem.scss'
import { addItem } from '../../../redux/cart/cartActions'

const ClothingItem = (props) => {
    const { item, addItem } = {...props}
    const {name, imageUrl, price} = {...item}
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
            <CustomButton type='submit' onClick={() => addItem(item)} customClass='inverted'>Add To Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect( null, mapDispatchToProps )(ClothingItem)