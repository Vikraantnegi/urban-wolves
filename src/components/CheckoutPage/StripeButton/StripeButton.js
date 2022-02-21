import React from 'react'
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux';
import { emptyCart } from '../../../redux/cart/cartActions';

const StripeButton = (props) => {
    const { totalAmount, emptyCart } = props;
    const totalStripeAmount = totalAmount*100;
    const publishKey = 'pk_test_51ImZFjSGoayWD3rXuFeZ9hgCeNIqYxw2ll2dGKjSjjwECy6c8JggHOfdOyMNJZLQdknTOXNh1ckw0spjSmX7tkvZ00k6GRheAx'
    const navigate = useNavigate()

    const onToken = token => {
        console.log(token)
        emptyCart()
        navigate('/')
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
            token={(token) => onToken(token)}
            stripeKey={publishKey} 
        />
    )
}

const mapDispatchToProps = dispatch => ({
    emptyCart : () => dispatch(emptyCart())
})

export default connect(null, mapDispatchToProps)(StripeButton)