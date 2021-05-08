import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FormElement = styled.div`
  background-color: var(--white);
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.56rem;
  padding-top: 0.625rem;
  overflow: hidden;

  label, small {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.19rem;
    padding-left: 0.625rem;
  }

  input,
  textarea,
  select {
    background-color: var(--white);
    border: none;
    color: var(--gray);
    font-size: 1rem;
    width: 100%;
    padding: 0 0.625rem 0.5rem;

    &:focus {
      outline: 0;
      border-color: var(--red);
    }

    ::placeholder {
      color: var(--gray-2);
      opacity: 1;
    }

    :-ms-input-placeholder {
    color: var(--gray-2);
    }

    ::-ms-input-placeholder {
    color: var(--gray-2);
    }
  }

  small {
    color: var(--red);
    font-weight: 400;
    margin-bottom: 0.625rem;
  }
`;
