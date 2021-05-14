// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './product';
// import { perPage } from '../../config';

export const ID_SECTION = "ourProducts";

/* export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`; */

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 79.75rem;
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

export default function OurProducts() {
  /* const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>; */

  return (
    <Section id={ID_SECTION}>
      <Title>Our Products</Title>
      <List>
        {[1,2,3,4,5,6,7,8].map(el => (
          <Product key={el} />
        ))}
        {/* data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        )) */}
      </List>
    </Section>
  );
}
