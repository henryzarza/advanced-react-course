import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21.875rem, 1fr));
  grid-gap: 3rem;
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 10rem 1rem 1rem;
  width: 100%;
`;

export const OrderItem = styled.div`
  background-color: var(--white);
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
    box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.45);
  }

  /* border-bottom: 1px solid var(--offWhite);
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: center;
  grid-gap: 2rem;
  margin: 2rem 0;
  padding-bottom: 2rem; */
`;

export const OrderMeta = styled.div`
  border-bottom: 0.7rem solid var(--red);
  display: flex;
  margin-bottom: 1rem;

  span {
    border: 1px solid var(--red);
    font-size: 1rem;
    font-weight: 400;
    padding: 1rem;

    &:first-child {
      font-weight: 900;
      text-align: right;
    }
  }
`;

export const Images = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 2rem;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;
