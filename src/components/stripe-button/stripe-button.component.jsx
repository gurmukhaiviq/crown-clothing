import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I3HepD9qJZzOUOMgchTJnRxJVQCcrEZHtGOYzxd8nxusZvEJzYC7ImrdvF1xUEBu2AoLJzqTnUSeuosEc4ggpJy00hfZc6J3K';

   const onToken = token => {
        console.log(token);
        alert ('Payment Successful');
    }

    return (
        <StripeCheckout 
        label = 'Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress 
        shippingAddress
        image= 'https://sendeyo.com/up/d/f3eb2117da'
        description = {`Your Total Is $${price}`}
        amaunt = {priceForStripe}
        panelLabel= 'Pay Now'
        token = {onToken}
        stripeKey= {publishableKey}
        />
    );
};

export default StripeCheckoutButton;