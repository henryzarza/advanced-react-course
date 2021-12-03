import Link from 'next/link';
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { useUserLoader, CURRENT_USER_QUERY } from '../lib/User';
import { useCart } from './Cart/cartState';
import Cart from './Cart/Cart';
import Search from './Search';
import { ShoppingCart, Logout } from './Icons';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

/* Start styles */
const NavContainer = styled.nav`
  align-items: center;
  background-color: var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  left: 0;
  min-height: 5.875rem;
  padding: 1.375rem 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 0 1rem;
  position: relative;
  width: 100%;
`;

const Logo = styled.h1`
  color: var(--black);
  cursor: pointer;
  font-size: 2rem;
  font-weight: 800;
  line-height: 2rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin-right: 1.75rem;

  span {
    color: var(--red);
  }
`;

const NavLink = styled.a`
  color: var(--black);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-right: 2.5rem;
  position: relative;
  transition: color var(--transition-duration) var(--transition-function);

  &::before {
    bottom: -0.25rem;
    content: '';
    background-color: var(--red);
    height: 3px;
    left: 0;
    position: absolute;
    right: 0;
    transform: scaleX(0);
    transition: transform 0.4s cubic-bezier(1, -0.65, 0, 2.31);
  }

  &.last {
    margin-right: 0;
    position: absolute;
    right: 0;
  }

  &:hover,
  &:focus {
    color: var(--red);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const IcButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  line-height: 0;
  position: relative;

  &:first-of-type {
    margin: 0 1.2rem;
  }

  path {
    fill: var(--black);
    transition: fill var(--transition-duration) var(--transition-function);
  }

  &:hover,
  &:focus {
    path {
      fill: var(--red);
    }
  }
`;

const Badge = styled.span`
  align-items: center;
  background-color: var(--red);
  border-radius: 50%;
  color: var(--white);
  display: flex;
  justify-content: center;
  font-size: 0.56rem;
  font-weight: 700;
  line-height: 1;
  min-height: 1.25rem;
  padding: 0.2rem;
  position: absolute;
  right: -0.7rem;
  top: -0.7rem;
  min-width: 1.25rem;
`;

const BtnContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
/* End styles */

export default function Navbar() {
  const { loading, data } = useUserLoader();
  const { openCart } = useCart();
  const router = useRouter()

  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });

  if (loading) return <h4>Loading...</h4>;

  return (
    <NavContainer>
      <Content>
        <Link href="/">
          <Logo>Sick<span>fits</span></Logo>
        </Link>
        <Link href="/products">
          <NavLink>Products</NavLink>
        </Link>
        {data ? (
          <>
            <Link href="/orders">
              <NavLink>Orders</NavLink>
            </Link>
            <Link href="/sell">
              <NavLink>Sell</NavLink>
            </Link>
            <Link href="/wishlist">
              <NavLink>Wishlist</NavLink>
            </Link>
            {(router.pathname === '/' || router.pathname === '/products') && (
              <Search />
            )}
            <BtnContainer>
              <IcButton type="button" onClick={openCart} aria-label="Open cart">
                <ShoppingCart width={24} height={24} />
                <Badge>
                  {data.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
                </Badge>
              </IcButton>
              <IcButton type="button" onClick={signout} aria-label="Sign out">
                <Logout width={24} height={24} />
              </IcButton>
            </BtnContainer>
            <Cart />
          </>
        ) : (
          <Link href="/signin">
            <NavLink className="last">Sign In</NavLink>
          </Link>
        )}
      </Content>
    </NavContainer>
  );
}
