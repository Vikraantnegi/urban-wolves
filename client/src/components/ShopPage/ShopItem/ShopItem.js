import React from 'react'
import { useNavigate } from 'react-router-dom'
import ClothingItem from '../ClothingItem/ClothingItem'
import './ShopItem.scss'

const ShopItem = (props) => {
    const { title, items, route } = {...props}
    const navigate = useNavigate();

    return (
        <div className='collection'>
            <h1 
                className='collection-title' 
                onClick={() => navigate(route)}
            >
                {title.toUpperCase()}
            </h1>
            <div className='collection-items'>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(item => {
                            return(
                                <ClothingItem
                                    key={item.id}
                                    item={item}
                                />
                            )
                        }
                )}
            </div>
        </div>
    )
}

export default ShopItem