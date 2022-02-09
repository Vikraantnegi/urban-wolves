import React from 'react'
import ShopItem from '../../components/ShopItem/ShopItem'
import ShopData from '../../static/shopData'

const ShopPage = () => {
    return (
        <div className='shop'>
            {
                ShopData.map(collection => {
                    return (
                        <ShopItem 
                            key={collection.id}
                            title={collection.title}
                            items={collection.items}
                            route={collection.routeName}
                        />
                    )
                })
            }
        </div>
    )
}

export default ShopPage