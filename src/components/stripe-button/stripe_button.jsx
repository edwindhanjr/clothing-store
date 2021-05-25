import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey="pk_test_51IuthYCuzyzjlT6frMhUxERGotV0LwzdPdnHHko28ppWkAPlwLtryFEqCjtxwESqQuQFUozgnva0XQUJu4pV5qKi00awfO2nPP";

    const onToken = token=>{
        console.log(token);
        alert('Payment Successfull');
    }
    return(
        <StripeCheckout
            label="Pay Now"
            name="Clothing Store"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey = {publishableKey}
        />
    );
}

export default StripeCheckoutButton ;