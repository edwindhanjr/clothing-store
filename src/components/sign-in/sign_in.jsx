import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form_input';
import CustomButton from '../custom-button/custom_button';
import { googleSignInStart, emailSignInStart } from '../../Redux/user/user_actions';

import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign_ing.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props ;
        const { email, password } = this.state;
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        const {googleSignInStart} = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch =>({
    googleSignInStart : ()=> dispatch(googleSignInStart()),
    emailSignInStart : (email, password)=>dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);