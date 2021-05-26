import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart_item';
import { selectCartItems } from '../../Redux/cart/cart_selector';
import { toggleCartHidden } from '../../Redux/cart/cart_actions';
import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer} from './cart_dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                    : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));