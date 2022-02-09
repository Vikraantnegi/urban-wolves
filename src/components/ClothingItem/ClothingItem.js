import React from 'react'

const ClothingItem = ({item}) => {
    const { name, imageUrl, price } = {...item}
    return (
        <div>
            {name}
        </div>
    )
}

export default ClothingItem