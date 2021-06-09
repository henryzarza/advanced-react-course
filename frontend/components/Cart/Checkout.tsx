import { loadStripe, StripeError } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import nProgress from 'nprogress';
import { useRouter } from 'next/dist/client/router';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { SickButton, CheckoutFormStyles } from '../styles/CartStyles';
import { useCart } from './cartState';
import { CURRENT_USER_QUERY } from '../../lib/User';

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState<StripeError>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] }
  );
  const { closeCart } = useCart();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    nProgress.start();
    // Create the payment method via stripe (Token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });
    // Handle any errors from stripe
    if (error) {
      setError(error);
      nProgress.done();
      return;
    }
    // Send the token to our keystone server, via a custom mutation
    const order = await checkout({
      variables: { token: paymentMethod.id }
    });
    router.push({
      pathname: `/order/[id]`,
      query: { id: order.data.checkout.id }
    });
    closeCart();
    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      {graphQLError && <p>{graphQLError.message}</p>}
      <CardElement />
      <SickButton type="submit" disabled={loading}>Check Out Now</SickButton>
    </CheckoutFormStyles>
  );
}

export default function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}
