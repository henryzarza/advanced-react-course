import styled from 'styled-components';

import { SM_BREAK_POINT } from '../../lib/cssVariables';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 0 1rem;
  width: 100%;
`;

export const Form = styled.form`
  background-color: var(--light-gray);
  border: 2px solid var(--white);
  border-radius: 0.25rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 33.125rem;
  padding: 2rem 3rem;
  width: 100%;

  @media (max-width: ${SM_BREAK_POINT}) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  color: var(--gray);
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 3rem;
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
`;
