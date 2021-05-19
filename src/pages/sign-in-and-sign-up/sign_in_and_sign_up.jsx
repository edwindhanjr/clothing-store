import React from 'react';
import './sign_in_and_sign_up.styles.scss';
import SignIn from '../../components/sign-in/sign_in';
import SignUp from '../../components/sign-up/sign_up';

const SignInAndSignUp = ()=>(
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;