import React from 'react'

import Input from '../Input';

import { SignupContainer, SignupWrapper, NavSignup } from './styles';

const Signup = () => {
    return (
        <SignupContainer>
        <SignupWrapper>
            <h1>Login</h1>
            <h3>
            don't have an account? <NavSignup to="signin">Signin</NavSignup>
            </h3>
            <Input placeholder="Email" type="email" marginTop={true} />
            <Input placeholder="Password" type="password" marginTop={true} />
   
            <button>Login</button>

        </SignupWrapper>
    </SignupContainer>
    )
}

export default Signup
