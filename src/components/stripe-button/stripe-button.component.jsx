import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51IZtsbSANkEcE73bg47WQx06VeMaWGGs3ECDKKwv1JQwSgMQMKv8YmMUBLWW6YSox0uLl0r2z0B95Jt5VzCGZyHG00XhTcoyE3'
    const onToken=token=>{
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name='Ecom Clothing'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}>

        </StripeCheckout>
    )
};

export default StripeCheckoutButton;