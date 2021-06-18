import styled from 'styled-components';
import { SM_BREAK_POINT } from '../../lib/cssVariables';

export const Title = styled.h1`
  color: var(--black);
  font-size: 3rem;
  font-weight: 800;
  line-height: 4.06rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin-bottom: 1.56rem;

  span {
    color: var(--red);
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: var(--light-gray);
  display: flex;
  min-height: 100vh;
  width: 100%;

  @media (max-width: ${SM_BREAK_POINT}) {
    flex-direction: column;
  }
`;

export const FormContent = styled.div`
  max-width: 100%;
  padding: 1rem;
  width: 23.5rem;
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: ${SM_BREAK_POINT}) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.56rem;
  width: 100%auto;
`;

export const ButtonLink = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  color: var(--red);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  text-decoration: underline;
  transition: color var(--transition-duration) var(--transition-function);

  &:hover,
  &:focus {
    color: var(----gray);
  }
`;

export const SuccessText = styled.p`
  color: var(--gray);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
`;
