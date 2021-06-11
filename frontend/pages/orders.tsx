import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';

import Error from '../components/ErrorMessage';
import formatMoney from '../lib/formatMoney';
import { Container, OrderItem, OrderMeta, Images } from '../components/styles/Orders';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    allOrders {
      id
      charge
      total
      user {
        id
      }
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

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

export default function OrdersPage() {
  const { data, error, loading } = useQuery(USER_ORDERS_QUERY);

  if (loading) return <h4>Loading...</h4>;

  if (error) return <Error error={error} />;

  const { allOrders } = data;

  return (
    <>
      <Head>
        <title>Your Orders ({allOrders.length})</title>
      </Head>
      <h2>You have {allOrders.length} orders!</h2>
      <Container>
        {allOrders.map((order) => (
          <OrderItem key={order.id}>
            <Link href={`/order/${order.id}`}>
              <a>
                <OrderMeta>
                  <span>{countItemsInAnOrder(order)} Items</span>
                  <span className="full">
                    {order.items.length} Product{order.items.length === 1 ? '' : 's'}
                  </span>
                  <span>{formatMoney(order.total)}</span>
                </OrderMeta>
                <Images>
                  {order.items.map((item) => (
                    <div key={`${order.id}-${item.id}`}>
                      <img src={item.photo?.image?.publicUrlTransformed} alt={item.name} />
                    </div>
                  ))}
                </Images>
              </a>
            </Link>
          </OrderItem>
        ))}
      </Container>
    </>
  );
}
