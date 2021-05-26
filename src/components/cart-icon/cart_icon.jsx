import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../Redux/cart/cart_actions';
import {selectCartItemsCount} from '../../Redux/cart/cart_selector';

import {CartContainer, ShoppingIcon, ItemCountContainer} from './cart_icon.styles';

const CartIcon = ({toggleCartHidden, itemCount})=>(
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapDispatchToProps = dispatch =>({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
});

const mapStateToProps =createStructuredSelector({
    itemCount : selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon) ;
