import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { FormElement } from '../styles/Form';
import { MainButton } from '../styles/Button';
import { Title, Form, FormContent, ButtonsContainer, ButtonLink } from '../styles/Signin';
import { CURRENT_USER_QUERY } from '../../lib/User';
import Error from '../ErrorMessage';
import { VALIDATION_SCHEMA, FIELD_NAMES, SCREENS } from './constant';

export const SIGNIN_MUTATION = gql`
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

interface Props {
  onChange: (param: string) => void;
}

export default function SignIn({ onChange }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signin, { data }] = useMutation(SIGNIN_MUTATION);
  const router = useRouter();

  const onSubmit = (formData) => {
    signin({ variables: formData, refetchQueries: [{ query: CURRENT_USER_QUERY }] })
      .then(response => {
        if (response.data.authenticateUserWithPassword.code !== "FAILURE") {
          router.push('/');
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Title>sick<span>fits</span></Title>
        <FormElement>
          <label htmlFor="email">Email</label>
          <input
            id="email"
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
            id="password"
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
          <ButtonLink type="button" onClick={() => onChange(SCREENS.REGISTER)}>Don’t have an account?</ButtonLink>
          <ButtonLink type="button" onClick={() => onChange(SCREENS.RESET_PASSWORD)}>Reset password</ButtonLink>
        </ButtonsContainer>
        {data?.authenticateUserWithPassword && <Error error={data.authenticateUserWithPassword} />}
      </FormContent>
    </Form>
  );
}

