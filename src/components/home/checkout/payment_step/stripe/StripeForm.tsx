import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import PaymentAlert from '../../../../common/alerts/PaymentAlert';

interface IForm {
  paymentIntent: any;
}

export default function StripeForm({ paymentIntent }: IForm) {
  const [message, setMessage] = useState<{
    content: string | undefined;
    type: string;
  }>({ content: '', type: '' });
  const [alertShow, setAlertShow] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    //Grab the client secret from url params
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent: any }) => {
        console.log(paymentIntent);
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage({
              content: 'Payment succeeded!',
              type: paymentIntent.status,
            });
            break;
          case 'processing':
            setMessage({
              content: 'Your payment is processing.',
              type: paymentIntent.status,
            });
            break;
          case 'requires_payment_method':
            setMessage({
              content: 'Your payment was not successful, please try again.',
              type: paymentIntent.status,
            });
            break;
          default:
            setMessage({
              content: 'Something went wrong.',
              type: paymentIntent.status,
            });
            break;
        }
      });
  }, [stripe]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('not loaded');
      // Stripe.js has not yet loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/checkouts/4/success',
        receipt_email: 'cochetantony@gmail.com',
        shipping: {
          address: { line1: 'NY' },
          name: 'Antony Cochet',
        },
        payment_method_data: {
          billing_details: {
            name: 'Antony Cochet',
          },
        },
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage({
        content: error.message,
        type: 'card_error',
      });
      setAlertShow(true);
    } else {
      setMessage({
        content: 'An unexpected error occured.',
        type: 'card_error',
      });
      setAlertShow(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit} className="w-full">
        <PaymentElement id="payment-element" />
        <button
          className="bg-indigo-500 px-4 py-2 rounded-md text-white mt-5"
          disabled={isLoading || !stripe || !elements}
        >
          <span id="button-text">
            {isLoading ? 'En attente' : 'Confirmer le paiement'}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && (
          <PaymentAlert
            alertMessage={message}
            setAlertShow={setAlertShow}
            alertShow={alertShow}
          />
        )}
      </form>
    </>
  );
}
