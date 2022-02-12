import React from 'react'
import './CustomButton.scss'

const CustomButton = (props) => {
    const { children, customClass='', ...otherProps } = {...props}
    return (
        <button
            className={`${customClass} custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default CustomButton