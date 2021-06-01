import styled from 'styled-components';

const DropDown = styled.ul`
  border: 1px solid var(--light-gray);
  border-radius: 0 0.25rem 0.25rem 0;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const DropDownItem = styled.li`
  align-items: center;
  border-bottom: 1px solid var(--gray-3);
  border-left: 0.625rem solid ${(props) => (props.highlighted ? 'var(--gray)': 'var(--white)')};
  background-color: ${(props) => (props.highlighted ? 'var(--light-gray)' : 'var(--white)')};
  display: flex;
  padding: 1rem;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  transition: all 0.2s;

  img {
    margin-right: 0.625rem;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

const InputContainer = styled.div`
  min-height: 2.875rem;
  position: relative;
  max-width: 100%;
  width: 29.75rem;

  input {
    background-color: var(--light-gray);
    border: none;
    border-radius: 0.25rem;
    color: var(--gray);
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.75rem 0.75rem 0.75rem 2.75rem;
    width: 100%;

    ::-webkit-input-placeholder {
      color: var(--gray-2);
    }

    :-ms-input-placeholder {
      color: var(--gray-2);
    }

    ::placeholder {
      color: var(--gray-2);
    }
  }

  svg {
    left: 0.75rem;
    position: absolute;
    top: 0.95rem;
  }
`;

export { DropDown, DropDownItem, InputContainer };
