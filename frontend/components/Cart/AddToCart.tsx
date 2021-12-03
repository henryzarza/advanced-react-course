import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

import { MainButton } from '../styles/Button';
import { CURRENT_USER_QUERY } from '../../lib/User';

/* Start styles */
const BtnCart = styled.button`
  border: none;
  background-color: rgba(0,0,0,0.4);
  color: var(--white);
  cursor: pointer;
  line-height: 1.1;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  position: absolute;
  left: 0;
  top: 0;
  transition: background-color var(--transition-duration) var(--transition-function);
  z-index: 1;

  &:hover,
  &:focus {
    background-color: var(--red);
  }
`;
/* End styles */

export const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

interface Props {
  id: string;
  isBig?: boolean;
}

export default function AddToCart({ id, isBig }: Props) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });
  const Cmp = isBig ? MainButton : BtnCart;

  return (
    <Cmp disabled={loading} type="button" onClick={addToCart}>
      Add{loading && 'ing'} to cart
    </Cmp>
  );
}
