import React from 'react';
import MenuItem from '../../components/HomePage/MenuItem/MenuItem';
import './HomePage.scss'

const HomePage = (props) => {

    const items = [{
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        }, {
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        }, {
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        }, {
            title: 'Womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 4,
            size: 'large',
            linkUrl: 'shop/womens'
        }, {
            title: 'Mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 5,
            size: 'large',
            linkUrl: 'shop/mens'
        }
    ];

    return (
        <div className='homepage'>
            <h1 className='title'>Welcome to Urban Wolves</h1>
            <div className='directory-menu'>
                {items.map((item, index) => {
                    return (
                        <MenuItem
                        key={index}
                            id={item.id}
                            title={item.title}
                            image={item.imageUrl}
                            url={item.linkUrl}
                            customClass={item.size}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default HomePage;