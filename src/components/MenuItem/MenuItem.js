import React from 'react';
import './MenuItem.scss'

const MenuItem = (props) => {
    const { title, image, link, customClass } = {...props};
    return (        
        <div
            className={`${customClass} menu-item`} 
            onClick={() => window.open(link)}
        >
            <div
                className='bg-image' 
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem