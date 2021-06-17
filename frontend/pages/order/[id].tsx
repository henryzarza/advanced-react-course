import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';

import Error from '../../components/ErrorMessage';
import { OrderItemContainer, Item, ItemsContainer, Details, OrderTitle } from '../../components/styles/Orders';
import formatMoney from '../../lib/formatMoney';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      charge
      total
      # user {
      #  id
      # }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
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

export default function SingleOrderPage({ query }: Props) {
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: query.id }
  });

  if (loading) return <h3>Loading...</h3>;

  if (error) return <Error error={error} />;

  const { order } = data;

  return (
    <>
      <Head>
        <title>Sick Fits - {order.id}</title>
      </Head>
      <OrderItemContainer>
        <OrderTitle>Order detail</OrderTitle>
        <Item>
          <span>Order Id:</span>
          <span>{order.id}</span>
        </Item>
        <Item>
          <span>Charge:</span>
          <span>{order.charge}</span>
        </Item>
        <Item>
          <span>Order Total:</span>
          <span>{formatMoney(order.total)}</span>
        </Item>
        <Item>
          <span>ItemCount:</span>
          <span>{order.items.length}</span>
        </Item>
        {/* <Item>
          {order.items.map((item) => (
            <ItemsContainer className="order-item" key={item.id}>
              <img src={item.photo.image.publicUrlTransformed} alt={item.title} />
              <Details>
                <h3>{item.name}</h3>
                <span>Qty: <strong>{item.quantity}</strong></span>
                <span>Each: <strong>{formatMoney(item.price)}</strong></span>
                <span>Sub Total: <strong>{formatMoney(item.price * item.quantity)}</strong></span>
                <p>{item.description}</p>
              </Details>
            </ItemsContainer>
          ))}
        </Item> */}
      </OrderItemContainer>
    </>
  );
}
