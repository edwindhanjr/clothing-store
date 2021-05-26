import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../Redux/cart/cart_actions';
import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout_item.styles';
const CheckoutItem = ({cartItem, clearItem, addItem, removeItem })=>{
    const {name, imageUrl, price, quantity} = cartItem;
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt="item" />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div className="arrow" onClick={()=>removeItem(cartItem)}> &#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItem(cartItem)}> &#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={()=>clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)};

const mapDispathcToProps = dispatch =>({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item=>dispatch(addItem(item)),
    removeItem : item=> dispatch(removeItem(item))
})

export default connect(null, mapDispathcToProps)(CheckoutItem) ;