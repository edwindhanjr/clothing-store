import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form_input';
import CustomButton from '../custom-button/custom_button';
import { googleSignInStart, emailSignInStart } from '../../Redux/user/user_actions';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign_ing.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({
            ...userCredentials, [name]: value
        });
    }
    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    label="password"
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type="submit">Sing in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sing in with google</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);