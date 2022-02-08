import React from 'react';
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
                        <div key={item.id} className='menu-item'>
                            <div className='content'>
                                <div className='title'>{item.title}</div>
                                <span className='subtitle'>{item.subTitle}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default HomePage;