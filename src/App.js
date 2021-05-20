import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign_in_and_sign_up';
import './App.css';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './Redux/user/user_actions';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser : user=> dispatch(setCurrentUser(user))
  }
)

export default connect(null,mapDispatchToProps)(App);
