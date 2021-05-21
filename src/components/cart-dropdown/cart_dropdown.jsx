import React from 'react';
import { connect } from 'react-redux';
import './cart_drop_down.styles.scss';
import CustomButton from '../custom-button/custom_button';
import CartItem from '../cart-item/cart_item';
import { selectCartItems } from '../../Redux/cart/cart_selector';

const CartDropdown = ({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT </CustomButton>
    </div>
);

const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown) ;