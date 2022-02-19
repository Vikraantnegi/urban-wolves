import React from 'react'
import './CollectionPage.scss'
import { useParams } from 'react-router-dom'
import shopData from '../../static/shopData';
import ClothingItem from '../../components/ShopPage/ClothingItem/ClothingItem';

const CollectionPage = (props) => {
    let params = useParams();
    const collection = shopData.find(collection => collection.routeName === params.category);
    const items = collection && collection.items
    return (
        <div className='category'>
            <h1 className='category-title'>
                {params.category.toUpperCase()}
            </h1>
            <div className='category-collection'>
                <div className='category-items'>
                    {
                        items.map(item => {
                            return(
                                <ClothingItem
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionPage