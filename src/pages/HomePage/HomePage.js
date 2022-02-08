import React from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import './HomePage.scss'

const HomePage = (props) => {

    const items = [{ id: 1, title: 'Hats', subTitle: 'Shop Now' },
        { id: 2, title: 'Jackets', subTitle: 'Shop Now' },
        { id: 3, title: 'Shoes', subTitle: 'Shop Now' },
        { id: 4, title: 'Womens', subTitle: 'Shop Now' },
        { id: 5, title: 'Mens', subTitle: 'Shop Now' },
    ]

    return (
        <div className='homepage'>
            <h1>Welcome to my Homepage</h1>
            <div className='directory-menu'>
                {items.map(item => {
                    return (
                        <MenuItem
                            id={item.id}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default HomePage;