import styled from 'styled-components';

const ErrorStyles = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid var(--red);
  background-color: var(--white);
  padding: 1rem;
  margin: 1rem 0;

  p {
    margin: 0;
    font-weight: 400;
  }

  strong {
    font-weight: 600;
    margin-right: 1rem;
  }
`;

interface Props {
  error: {
    message: string;
    networkError: {
      result: {
        errors: {
          message: string;
        }[]
      }
    }
  }
}

const ErrorMessage = ({ error }: Props) => {
  if (!error.message) return null;

  /* if (error.networkError?.result?.errors?.length) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p>
          <strong>Shoot!</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  } */

  return (
    <ErrorStyles>
      <p>
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

export default ErrorMessage;
