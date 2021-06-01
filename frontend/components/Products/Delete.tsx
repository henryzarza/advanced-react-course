import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { MainButton } from '../styles/Button';

export const IcBtn = styled(MainButton)`
  background-color: var(--light-gray);
  color: var(--gray);
  border-color: var(--gray);
  font-weight: 500;
  padding: 0.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:first-of-type {
    margin-right: 0.5rem;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--red);
    border-color: var(--red);
    color: var(--white);
  }
`;

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

interface Props {
  id: string;
}

export default function DeleteProduct({ id }: Props) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update
  });

  return (
    <IcBtn
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      Delete
    </IcBtn>
  );
}
