import Link from 'next/link';
import styled from 'styled-components';

/* import { useUser } from './User';
import SignOut from './SignOut';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount'; */
// import Cart from './Cart';
// import Search from './Search';
import { ShoppingCart, Logout, Search } from './Icons';

const NavContainer = styled.nav`
  background-color: var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  left: 0;
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
  width: 100%;
`;

const Logo = styled.h1`
  color: var(--black);
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

const InputContainer = styled.div`
  min-height: 2.875rem;
  position: relative;
  max-width: 100%;
  width: 29.75rem;

  input {
    background-color: var(--light-gray);
    border: none;
    border-radius: 0.25rem;
    color: var(--gray);
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.75rem 0.75rem 0.75rem 2.75rem;
    width: 100%;

    ::-webkit-input-placeholder {
      color: var(--gray-2);
    }

    :-ms-input-placeholder {
      color: var(--gray-2);
    }

    ::placeholder {
      color: var(--gray-2);
    }
  }

  svg {
    left: 0.75rem;
    position: absolute;
    top: 0.95rem;
  }
`;

export default function Navbar() {
  const user = true; // useUser();
  // const { openCart } = useCart();

  return (
    <NavContainer>
      <Content>
        <Link href="/">
          <Logo>Sick<span>fits</span></Logo>
        </Link>
        <Link href="/products">
          <NavLink>Products</NavLink>
        </Link>
        {user ? (
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
            <InputContainer>
              <Search width={20} height={20} />
              <input type="search" placeholder="Search for an amazing product" />
            </InputContainer>
            <BtnContainer>
              <IcButton type="button">
                <ShoppingCart width={24} height={24} />
                <Badge>10</Badge>
              </IcButton>
              <IcButton type="button">
                <Logout width={24} height={24} />
              </IcButton>
            </BtnContainer>
            {/* <SignOut />
            <button type="button" onClick={openCart}>
              My Cart
              <CartCount
                count={user.cart.reduce(
                  (tally, cartItem) =>
                    tally + (cartItem.product ? cartItem.quantity : 0),
                  0
                )}
              />
            </button> */}
          </>
        ) : (
          <Link href="/signin">
            <NavLink>Sign In</NavLink>
          </Link>
        )}
      </Content>
    </NavContainer>
  );
}
