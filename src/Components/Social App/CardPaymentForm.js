import React from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from 'react-bootstrap';
import { createSubscription } from '../../Api/index';

const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
        base: {
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "#CFD7DF"
            }
        },
        invalid: {
            color: "red"
        }
    }
};

const CardPaymentForm = ({ type }) => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        const result = await stripe.createToken(card);

        if (result.error) {
            console.log(result.error.message);
        } else {
            const userId = JSON.parse(localStorage.getItem('userdata'))._id;
            const data = {
                planId: type,
                payment_method: result.token.card.id,
                userId
            };
            createSubscription(data);
            console.log(result.token.card.id);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <div className="text-center mt-3">
                <Button type='submit' variant='success'>Subscribe Now</Button>
            </div>
        </form>
    )
}

export default CardPaymentForm