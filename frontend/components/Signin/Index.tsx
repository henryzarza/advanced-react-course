import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";

import { FormElement } from '../styles/Form';
import { MainButton } from '../styles/Button';
import { Title, Form, FormContent, ButtonsContainer, ButtonLink } from '../styles/Signin';
import { CURRENT_USER_QUERY } from '../User';
import Error from '../ErrorMessage';
import { VALIDATION_SCHEMA, FIELD_NAMES } from './constant';

const SIGNIN_MUTATION = gql`
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
`;

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signin, { data }] = useMutation(SIGNIN_MUTATION);

  const onSubmit = (formData) => {
    signin({ variables: formData, refetchQueries: [{ query: CURRENT_USER_QUERY }] });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Title>sick<span>fits</span></Title>
        <FormElement>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            {...register(FIELD_NAMES.EMAIL, VALIDATION_SCHEMA.EMAIL)}
          />
          {errors[FIELD_NAMES.EMAIL] && (
            <small>{errors[FIELD_NAMES.EMAIL].message}</small>
          )}
        </FormElement>
        <FormElement>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            {...register(FIELD_NAMES.PASSWORD, VALIDATION_SCHEMA.PASSWORD)}
          />
          {errors[FIELD_NAMES.PASSWORD] && (
            <small>{errors[FIELD_NAMES.PASSWORD].message}</small>
          )}
        </FormElement>
        <MainButton type="submit">Sign In</MainButton>
        <ButtonsContainer>
          <ButtonLink type="button">Don’t have an account?</ButtonLink>
          <ButtonLink type="button">Reset password</ButtonLink>
        </ButtonsContainer>
        {data?.authenticateUserWithPassword && <Error error={data.authenticateUserWithPassword} />}
      </FormContent>
    </Form>
  );
}

