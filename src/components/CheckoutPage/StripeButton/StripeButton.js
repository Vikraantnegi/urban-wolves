import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './StripeButton.css'

const StripeButton = (props) => {
    const { totalAmount } = props;
    const totalStripeAmount = totalAmount*100;
    const publishKey = 'pk_test_51ImZFjSGoayWD3rXuFeZ9hgCeNIqYxw2ll2dGKjSjjwECy6c8JggHOfdOyMNJZLQdknTOXNh1ckw0spjSmX7tkvZ00k6GRheAx'
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Urban Wolves Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${totalAmount}`}
            amount={totalStripeAmount}
            panelLabel='Pay Now'
            token={() => onToken()}
            stripeKey={publishKey} 
        />
    )
}

export default StripeButton