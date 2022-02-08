import React from 'react';

const MenuItem = (props) => {
    const { title, image, link, customClass } = {...props};
    return (        
        <div 
            style={{ backgroundImage: `url(${image})` }} 
            className={`${customClass} menu-item`} 
            onClick={() => window.open(link)}
        >
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem