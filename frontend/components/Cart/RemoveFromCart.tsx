import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { RemoveButton } from '../styles/CartStyles';

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function RemoveFromCart({ id }: { id: string }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update
  });

  return (
    <RemoveButton
      onClick={removeFromCart}
      disabled={loading}
      type="button"
      title="Remove this item from cart"
    >
      &times;
    </RemoveButton>
  );
}
