import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21.875rem, 1fr));
  grid-gap: 3rem;
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 7rem 1rem 1rem;
  width: 100%;
`;

export const OrderItem = styled.div`
  background-color: var(--white);
  border: 1px solid var(--light-gray);
  border-radius: 0.25em;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 1rem;
  transition: box-shadow var(--transition-duration) var(--transition-function);

  a {
    color: var(--gray);
    text-decoration: none;
  }

  &:hover {
    box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.35);
  }
`;

export const OrderMeta = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  position: relative;

  &::after {
    background: linear-gradient(90deg, #F52020 0%, #FAAB4D 100%);
    bottom: -1.5rem;
    content: '';
    left: 0;
    height: 0.625rem;
    position: absolute;
    right: 0;
  }

  span {
    background-color: var(--light-gray);
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;

    &.full {
      flex: 1;
    }

    &:last-child {
      font-weight: 900;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  height: 12rem;
  gap: 0.25rem;
  width: 100%;

  div {
    border: 1px solid var(--light-gray);
    flex: 1;
    height: 100%;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const OrderTitle = styled.h2`
  border-bottom: 2px solid var(--red);
  color: var(--gray);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
`;

export const OrderItemContainer = styled.div`
  background-color: var(--white);
  border: 2px solid var(--light-gray);
  border-radius: 0.25em;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  margin: 9rem auto 1rem;
  max-width: calc(var(--maxWidth) - 25rem);
  padding: 1.5rem;
  width: 100%;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-gap: 1rem;
  margin-bottom: 0.25rem;

  &.separator {
    border-bottom: 1px solid var(--gray-3);
    margin-bottom: 0;
    padding-bottom: 1rem;
  }

  span {
    color: var(--gray);
    font-size: 1rem;
    font-weight: 400;

    &:first-of-type {
      font-weight: 700;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;

  img {
    align-self: center;
    height: 12.5rem;
    object-fit: cover;
    width: 100%;
  }
`;

export const Details = styled.div`
  border-bottom: 1px solid var(--gray-3);
  display: flex;
  flex-direction: column;

  span, p {
    color: var(--gray);
    font-size: 1rem;
    font-weight: 400;
    padding: 0.5rem 0;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: 700;
  }
`;
