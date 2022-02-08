import React from 'react';

const MenuItem = (props) => {
    const { id, title, subTitle } = {...props};
    return (        
        <div key={id} className='menu-item'>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>{subTitle}</span>
            </div>
        </div>
    )
}

export default MenuItem