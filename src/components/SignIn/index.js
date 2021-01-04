import React from 'react'

import Input from '../Input';

import { SigninContainer, SigninWrapper } from './styles';

const Signin = () => {
    return (
        <SigninContainer>
            <SigninWrapper>
                <h1>Create Account</h1>
                <h3>Already have an account? </h3>
                <Input placeholder= "Name" type="text" marginTop={false} />
                <Input placeholder= "Email" type="email" marginTop={true} />
                <Input placeholder= "Phone" type="text" marginTop={true} />
                <Input placeholder= "Password" type="password" marginTop={true} />
                <Input placeholder= "Confirm Password" type="password" marginTop={true} />
                <button>Create Account</button>
            </SigninWrapper>
        </SigninContainer>
    )
}

export default Signin;
