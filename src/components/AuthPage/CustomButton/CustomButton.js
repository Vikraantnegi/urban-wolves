import React from 'react'
import './CustomButton.scss'

const CustomButton = (props) => {
    const { children, type } = {...props}
    return (
        <button
            className='custom-button'
            type={type}
        >
            {children}
        </button>
    )
}

export default CustomButton