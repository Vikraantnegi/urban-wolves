import React from 'react'
import './Loader.scss';

const Loader = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className='spinner-overlay'>
            <div className='spinner-container' />
        </div>
    ) : <WrappedComponent {...otherProps} />
}

export default Loader;