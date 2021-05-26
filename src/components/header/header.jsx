import React from 'react';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header_styles';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart_icon';
import CartDropdown from '../cart-dropdown/cart_dropdown';
import { selectCartHidden } from '../../Redux/cart/cart_selector';
import { selectCurrentUser } from '../../Redux/user/user_selector';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {
            hidden? null : <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);

