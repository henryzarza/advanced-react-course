import { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Error from '../ErrorMessage';
import Product from './product';
import { perPage } from '../../config';
import { useUser } from '../../lib/User';

export const ID_SECTION = "ourProducts";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 0 1rem;
  width: 100%;
`;

const Title = styled.h2`
  color: var(--gray);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 3rem;
  text-align: center;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-gap: 1.875rem;
`;

export default function OurProducts({ page }: { page: number; }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  const me = useUser();

  const isProductChecked = useCallback((productId: string) => {
    if (me && me.wishlist) {
      const wishItem = me.wishlist.find(el => el.product.id === productId);
      return wishItem ? wishItem.isChecked : false;
    }
    return false;
  }, [me]);

  if (loading) return <h3>Loading...</h3>;

  if (error) return <Error error={error} />;

  return (
    <Section id={ID_SECTION}>
      <Title>Our Products</Title>
      <List>
        {data?.allProducts?.map((product) => (
          <Product key={product.id} product={product} isChecked={isProductChecked(product.id)} />
        ))}
      </List>
    </Section>
  );
}
