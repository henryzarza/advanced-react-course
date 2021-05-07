import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
  padding: 0.75rem;
`;

export const MainButton = styled(Button)`
  background-color: var(--red);
  border: 1px solid var(--red);
  color: var(--white);
  transition: background-color var(--transition-duration) var(--transition-function), color var(--transition-duration) var(--transition-function);
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    color: var(--red);
  }
`;
