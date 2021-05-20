import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { SM_BREAK_POINT } from '../../lib/cssVariables';
import { LeftArrow, RightArrow } from '../Icons';
// import DisplayError from './ErrorMessage';
// import { perPage } from '../../config';

const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem auto;
  max-width: 79.75rem;
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

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }: { page: number }) {
  // const { error, loading, data } = useQuery(PAGINATION_QUERY);

  // if (loading) return 'Loading...';
  // if (error) return <DisplayError error={error} />;

  // TODO fix this is throwing an error
  /* const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage); */
  const pageCount = 4;

  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <StyledLink aria-disabled="true">
          <LeftArrow width={20} height={20} />
        </StyledLink>
      </Link>
      {/* <Link prefetch href={href} passHref> */}
      <Link href={`/products/${page - 1}`}>
        <StyledLink isActive>1</StyledLink>
      </Link>
      <Link href={`/products/${page - 1}`}>
        <StyledLink>2</StyledLink>
      </Link>
      <Link href={`/products/${page - 1}`}>
        <StyledLink>3</StyledLink>
      </Link>
      <Link href={`/products/${page - 1}`}>
        <StyledLink>4</StyledLink>
      </Link>
      <Link href={`/products/${page - 1}`}>
        <StyledLink>
          <RightArrow width={20} height={20} />
        </StyledLink>
      </Link>
      {/* <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link> */}
    </PaginationStyles>
  );
}
