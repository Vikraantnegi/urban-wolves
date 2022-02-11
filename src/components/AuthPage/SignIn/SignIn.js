import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
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
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label='Email'
                    onChange={(event) => handleChange(event)}
                />

                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    label='Password'
                    onChange={(event) => handleChange(event)}
                />

                <input type='submit' value='Submit Form' />
            </form>
        </div>
    )
}

export default SignIn