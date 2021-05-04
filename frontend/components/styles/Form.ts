import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.19rem;

  input,
  textarea,
  select {
    background-color: var(--white);
    font-size: 1rem;
    width: 100%;
    padding: 0.5rem 0.625rem;
    border: 1px solid red;

    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
`;
