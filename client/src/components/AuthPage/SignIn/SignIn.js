import React, { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import { auth, signInWithGoogle } from '../../../firebase'
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        await auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                setEmail('')
                setPassword('')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='sign-in'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={(event) => handleSubmit(event)}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label='Email'
                    handleChange={(event) => handleChange(event)}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    label='Password'
                    handleChange={(event) => handleChange(event)}
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton type="button" onClick={() => signInWithGoogle()} customClass='google-sign-in'>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn