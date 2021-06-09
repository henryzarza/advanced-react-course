import styled from 'styled-components';

import { MainButton } from './Button';

export const Backdrop = styled.div `
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${(props) => `translateX(${props.open ? '0' : '100%'});`};
  transition: transform 180ms cubic-bezier(1, -0.65, 0, 2.31);
  z-index: 2;
`;

export const CartStyles = styled.div`
  background-color: var(--white);
  bottom: 0;
  display: flex;
  flex-direction: column;
  max-width: 31.25rem;
  padding: 1.2rem;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${(props) => `translateX(${props.open ? '0' : '100%'});`};
  transition: transform 300ms cubic-bezier(1, -0.65, 0, 2.31);
  width: 100%;
  z-index: 3;

  header {
    align-items: center;
    border-bottom: 0.2rem solid var(--black);
    display: flex;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  footer {
    border-top: 0.7rem double var(--black);
    margin-top: 1rem;
    padding-top: 1rem;
    text-align: right;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    list-style: none;
    overflow-y: auto;
  }
`;

export const CartItemStyles = styled.li`
  align-items: center;
  border-bottom: 1px solid var(--gray-3);
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 1rem 0;

  img {
    margin-right: 1rem;
    width: 6rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }

  p {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.1;

    em {
      margin-bottom: 0.5rem;
    }
  }
`;

export const Supreme = styled.h3`
  background-color: var(--red);
  color: var(--white);
  padding: 0.2rem;
  transform: skew(-3deg);
  font-size: 1.8rem;
  font-weight: 500;
  flex: 1;
  margin-right: 1rem;
`;

export const CloseButton = styled.button`
  background-color: var(--black);
  border: 0;
  color: var(--white);
  cursor: pointer;
  font-size: 2rem;
  transition: background-color 180ms cubic-bezier(1, -0.65, 0, 2.31);

  &:hover {
    background-color: var(--gray);
  }
`;

export const RemoveButton = styled.button`
  border: 0;
  background-color: transparent;
  color: var(--black);
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 900;
  transition: color var(--transition-duration) var(--transition-function);

  &:hover {
    color: var(--red);
  }
`;

export const TotalPrice = styled.h5`
  color: var(--red);
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const SickButton = styled(MainButton)`
  border-radius: 0;
  text-transform: uppercase;
`;

export const CheckoutFormStyles = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border-radius: 0.25rem;
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;

  p {
    color: var(--red);
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`;
