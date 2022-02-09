import React from 'react'
import { useNavigate } from 'react-router-dom'
import ClothingItem from '../ClothingItem/ClothingItem'

const ShopItem = (props) => {
    const { title, items, route } = {...props}
    const navigate = useNavigate();

    return (
        <div className='collection'>
            <h1 
                className='collection-title' 
                onClick={() => navigate(route)}
            >
                {title}
            </h1>
            <div className='collection-items'>
                {items.map(item => {
                    return(
                        <ClothingItem
                            key={item.id}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ShopItem