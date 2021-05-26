import React from 'react';
import SignIn from '../../components/sign-in/sign_in';
import SignUp from '../../components/sign-up/sign_up';

import {SignInAndSignUpContainer} from './sign_in_and_sign_up.styles';

const SignInAndSignUp = ()=>(
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUp;