import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign_in_and_sign_up';
import CheckoutPage from './pages/checkout/checkout';
import { selectCurrentUser} from './Redux/user/user_selector';
import { checkUserSession } from './Redux/user/user_actions';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props ;
    checkUserSession();
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
        <Route exact path='/signin' render={()=>this.props.currentUser ?(<Redirect to="/" />) :(<SignInAndSignUp />) }/>
        <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps =createStructuredSelector({
  currentUser : selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  checkUserSession : ()=> dispatch(checkUserSession())
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
