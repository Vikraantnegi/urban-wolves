import React from 'react';
import MenuItem from '../../components/HomePage/MenuItem/MenuItem';
import collectionData from '../../static/collectionData';
import './HomePage.scss'

const HomePage = (props) => {
    return (
        <div className='homepage'>
            <h1 className='title'>Welcome to Urban Wolves</h1>
            <div className='directory-menu'>
                {collectionData.map((item, index) => {
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