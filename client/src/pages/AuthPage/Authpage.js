import React from 'react'
import SignIn from '../../components/AuthPage/SignIn/SignIn'
import SignUp from '../../components/AuthPage/SignUp/SignUp'
import './AuthPage.scss'

const AuthPage = () => {
    
    return (
        <div className='auth'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default AuthPage