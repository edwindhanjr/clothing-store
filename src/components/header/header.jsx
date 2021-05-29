import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CartIcon from '../cart-icon/cart_icon';
import CartDropdown from '../cart-dropdown/cart_dropdown';
import { selectCartHidden } from '../../Redux/cart/cart_selector';
import { selectCurrentUser } from '../../Redux/user/user_selector';
import { signOutStart } from '../../Redux/user/user_actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';


import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header_styles';




const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

