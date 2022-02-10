import React, { useState } from 'react'
import './SignIn.scss'

const SignIn = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === 'email'){
            setEmail(value)
        } else if (name === 'password'){
            setPassword(value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail('')
        setPassword('')
    }

    return (
        <div className='sign-in'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={() => handleSubmit}>
                <input
                    name='email'
                    placeholder='Enter your email...'
                    type='email'
                    value={email}
                    onChange={(event) => handleChange(event)}
                    required
                />
                <label>Email</label>

                <input
                    name='password'
                    type='password'
                    placeholder='Enter your password...'
                    value={password}
                    onChange={(event) => handleChange(event)}
                    required
                />
                <label>Password</label>

                <input type='submit' value='Submit Form' />
            </form>
        </div>
    )
}

export default SignIn