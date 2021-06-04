import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';

import Error from '../../components/ErrorMessage';
import AddToCart from '../../components/Cart/AddToCart';
import formatMoney from '../../lib/formatMoney';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: var(--maxWidth);
  min-height: 100vh;
  padding: 0 1rem;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 59.375rem;
  width: 100%;
`;

const Img = styled.img`
  object-fit: contain;
  max-width: 28rem;
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 22.5rem;
`;

const Name = styled.h2`
  color: var(--gray);
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.25rem;
`;

const Price = styled.h3`
  color: var(--red);
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1.25rem;
`;

const Description = styled.p`
  color: var(--gray);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

interface Props {
  query: {
    id: string;
  }
}

export default function SingleProduct({ query }: Props) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id: query.id }
  });

  if (loading) return <h5>Loading...</h5>;

  return (
    <Container>
      {error ? (
        <Error error={error} />
      ) : (
        <Content>
          <Head>
            <title>Sick Fits | {data.Product.name}</title>
          </Head>
          <Img
            src={data.Product.photo.image.publicUrlTransformed}
            alt={data.Product.photo.altText}
          />
          <Details>
            <Name>{data.Product.name}</Name>
            <Price>{formatMoney(data.Product.price)}</Price>
            <Description>{data.Product.description}</Description>
            <AddToCart id={query.id} isBig />
          </Details>
        </Content>
      )}
    </Container>
  );
}
