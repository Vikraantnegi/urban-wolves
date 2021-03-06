import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, createUser } from '../../../firebase'
import './SignUp'

const SignUp = () => {
    const [ displayName, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const photoURL = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords don't match")
            return
        }

        const { user } = await auth.createUserWithEmailAndPassword(email, password)
        await createUser(user, {displayName, photoURL})
            .then(res => {
                setName('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
            })
            .catch(err => console.log(err))
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === 'email'){
            setEmail(value)
        } else if (name === 'password'){
            setPassword(value)
        } else if (name === 'name'){
            setName(value)
        } else if (name === 'confirmPassword'){
            setConfirmPassword(value)
        }

    }

    return(
        <div className='sign-up'>
            <h2>New user? Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={(event) => handleSubmit(event)}>
                <FormInput
                    name='name'
                    type='text'
                    value={displayName}
                    label='Name'
                    handleChange={(event) => handleChange(event)}
                    required
                />
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
                <FormInput
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    label='Confirm Password'
                    handleChange={(event) => handleChange(event)}
                    required
                />                
                <CustomButton type='submit'>
                    Sign Up
                </CustomButton>
            </form>
            
        </div>
    )
}

export default SignUp