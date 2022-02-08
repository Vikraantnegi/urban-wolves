import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuItem.scss'

const MenuItem = (props) => {
    const { title, image, url, customClass } = {...props};
    const navigate = useNavigate();

    return (        
        <div
            className={`${customClass} menu-item`} 
            onClick={() => navigate(url)}
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