import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { SM_BREAK_POINT } from '../../lib/cssVariables';
import { LeftArrow, RightArrow } from '../Icons';
import Error from '../ErrorMessage';
import { perPage } from '../../config';

/* Start styles */
const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem auto;
  max-width: var(--maxWidth);
  padding: 0 1rem;

  @media (max-width: ${SM_BREAK_POINT}) {
    margin: 2rem auto;
  }
`;

const StyledLink = styled.a`
  align-items: center;
  border: 2px solid var(--red);
  background-color: ${props => props.isActive ? "var(--red)" : "transparent"};
  color: ${props => props.isActive ? "var(--white)" : "var(--red)"};
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  height: 2.5em;
  margin-right: 0.9rem;
  transition: background-color var(--transition-duration) var(--transition-function), color var(--transition-duration) var(--transition-function);
  padding: 0.25rem;
  width: 2.5rem;

  &:last-of-type {
    margin-right: 0;
  }

  &[aria-disabled='true'] {
    filter: grayscale(1);
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover,
  &:focus {
    background-color: var(--red);
    color: var(--white);

    svg path {
      fill: var(--white);
    }
  }

  svg path {
    fill: var(--red);
    transition: fill var(--transition-duration) var(--transition-function);
  }
`;
/* End styles */

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }: { page: number }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);

  if (loading) return <h3>Loading...</h3>;

  if (error) return <Error error={error} />;

  const count = data?._allProductsMeta?.count || 0;
  const pageCount = Math.ceil(count / perPage);
  const mockArray = Array(pageCount).fill('');

  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <StyledLink aria-disabled={page <= 1}>
          <LeftArrow width={20} height={20} />
        </StyledLink>
      </Link>
      {mockArray.map((_, index) => (
        <Link key={index} href={`/products/${index + 1}`}>
          <StyledLink isActive={page === index + 1}>{index + 1}</StyledLink>
        </Link>
      ))}
      <Link href={`/products/${page - 1}`}>
        <StyledLink aria-disabled={page >= pageCount}>
          <RightArrow width={20} height={20} />
        </StyledLink>
      </Link>
    </PaginationStyles>
  );
}
