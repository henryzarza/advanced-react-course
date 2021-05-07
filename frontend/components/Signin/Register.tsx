import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import useForm from '../../lib/useForm';
import { FormElement } from '../styles/Form';
import { MainButton } from '../styles/Button';
import { Title, Form, FormContent, ButtonsContainer, ButtonLink } from '../styles/Signin';
import Error from '../ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signup().catch(console.error);
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <FormContent>
        <Title>sick<span>fits</span></Title>
        <h2>Sing up</h2>
        <Error error={error} />
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} - Please Go Head and Sign in!
          </p>
        )}
        <FormElement>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </FormElement>
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
        <FormElement>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </FormElement>
        <MainButton type="submit" disabled={loading}>
          Sign Up
        </MainButton>
        <ButtonsContainer>
          <ButtonLink type="button">I already have an account</ButtonLink>
        </ButtonsContainer>
      </FormContent>
    </Form>
  );
}
