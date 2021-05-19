import React from 'react';
import './sign_in.styles.scss';
import FormInput from '../form-input/form_input';
import CustomButton from '../custom-button/custom_button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        }catch(error){
            console.log(error);
        }
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
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
                    <div className="button">
                        <CustomButton type="submit">Sing in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sing in with google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;