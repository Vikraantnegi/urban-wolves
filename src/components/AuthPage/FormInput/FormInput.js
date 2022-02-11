import React from 'react'
import './FormInput.scss'

const FormInput = (props) => {
    const { label, handleChange, name, type, value } = {...props}    
    return (
        <div className='group'>
            <input
                className='form-input'
                name={name}
                type={type}
                value={value}
                onChange={(e) => handleChange(e)}
                required
            />
            {label && <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
        </div>
    )
}

export default FormInput