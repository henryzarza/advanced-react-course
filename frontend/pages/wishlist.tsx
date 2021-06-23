import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

import Empty from '../components/Empty';
import { useUser } from '../lib/User';
import formatMoney from '../lib/formatMoney';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 9rem 1rem 1rem;
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

const Item = styled.a`
  border: 1px solid var(--light-gray);
  background-color: var(--white);
  border-radius: 0.25rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: box-shadow var(--transition-duration) var(--transition-function);
  width: 100%;

  &:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  }
`;

const ImgContainer = styled.div`
  line-height: 0;

  img {
    object-fit: cover;
    height: 18.75rem;
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h5, h6 {
    color: var(--gray);
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.15;
    margin-bottom: 0.625rem;
  };

  h5 {
    font-weight: 900;
    margin-bottom: 0;
  };
`;


export default function WishlistPage() {
  const me = useUser();

  return (
    <>
      <Head>
        <title>Your Wishlist</title>
      </Head>
      {me.wishlist.length > 0 ? (
        <Section>
          <Title>Your Wishlist</Title>
          <List>
            {me.wishlist.filter(el => el.isChecked).map(item => (
              <Link href={`/product/${item.product.id}`} key={item.id}>
                <Item>
                  <ImgContainer>
                    <img
                      src={item.product.photo.image.publicUrlTransformed}
                      alt={item.product.name}
                    />
                  </ImgContainer>
                  <Info>
                    <h6>{item.product.name}</h6>
                    <h5>{formatMoney(item.product.price)}</h5>
                  </Info>
                </Item>
              </Link>
            ))}
          </List>
        </Section>
      ) : (
        <Empty title="There're not data yet" />
      )}
    </>
  );
}
