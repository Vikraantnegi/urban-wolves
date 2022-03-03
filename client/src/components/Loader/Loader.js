import React from 'react'
import './Loader.scss';

const Loader = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <div className='spinner-overlay'>
                <div className='spinner-container' />
            </div>
        ) : <WrappedComponent {...otherProps} />
    }
    
    return Spinner;
}

export default Loader;