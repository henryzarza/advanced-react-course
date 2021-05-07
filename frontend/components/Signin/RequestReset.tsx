import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { FormElement } from '../styles/Form';
import { MainButton } from '../styles/Button';
import { Title, Form, FormContent, ButtonsContainer, ButtonLink } from '../styles/Signin';
import useForm from '../../lib/useForm';
import Error from '../ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      // refectch the currently logged in user
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    e.preventDefault();
    await signup().catch(console.error);
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <FormContent>
        <Title>sick<span>fits</span></Title>
        <h2>Request a Password Reset</h2>
        <Error error={error} />
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link!</p>
        )}
        <FormElement>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </FormElement>
        <MainButton type="submit" disabled={loading}>Request Reset</MainButton>
        <ButtonsContainer>
          <ButtonLink type="button">Return to Login</ButtonLink>
        </ButtonsContainer>
      </FormContent>
    </Form>
  );
}
