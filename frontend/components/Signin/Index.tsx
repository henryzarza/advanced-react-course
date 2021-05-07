/* import gql from 'graphql-tag';
import { useMutation } from '@apollo/client'; */
import { FormElement } from '../styles/Form';
import { MainButton } from '../styles/Button';
import { Title, Form, FormContent, ButtonsContainer, ButtonLink } from '../styles/Signin';
// import useForm from '../lib/useForm';
// import { CURRENT_USER_QUERY } from '../components/User';
// import Error from '../components/ErrorMessage';

/* const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`; */

export default function SignIn() {
  /* const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [signin, { data }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    await signin();
    resetForm();
    // Send the email and password to the graphqlAPI
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined; */

  return (
    <Form method="POST" onSubmit={console.log}>
      <FormContent>
        <Title>sick<span>fits</span></Title>
        <FormElement>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
          />
        </FormElement>
        <FormElement>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
          />
        </FormElement>
        <MainButton type="submit">Sign In</MainButton>
        <ButtonsContainer>
          <ButtonLink type="button">Don’t have an account?</ButtonLink>
          <ButtonLink type="button">Reset password</ButtonLink>
        </ButtonsContainer>
        {/* <Error error={error} /> */}
      </FormContent>
    </Form>
  );
}
