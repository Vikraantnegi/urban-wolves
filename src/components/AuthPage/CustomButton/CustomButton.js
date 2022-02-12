import React from 'react'
import './CustomButton.scss'

const CustomButton = (props) => {
    const { children, type, ...otherProps } = {...props}
    return (
        <button
            className='custom-button'
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default CustomButton