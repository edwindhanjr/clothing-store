import React from 'react';
import './cart_drop_down.styles.scss';
import CustomButton from '../custom-button/custom_button';

const CartDropdown = ()=>(
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT </CustomButton>
    </div>
);

export default CartDropdown ;