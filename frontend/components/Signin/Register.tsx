import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { FormElement } from '../styles/Form';
import { MainButton } from '../styles/Button';
import { Title, Form, FormContent, ButtonsContainer, ButtonLink } from '../styles/Signin';
import Error from '../ErrorMessage';
import { SCREENS, FIELD_NAMES, VALIDATION_SCHEMA } from './constant';
import { CURRENT_USER_QUERY } from '../User';

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

interface Props {
  onChange: (param: string) => void;
}

export default function SignUp({ onChange }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });

  const onSubmit = (formData) => {
    signup({ variables: formData, refetchQueries: [{ query: CURRENT_USER_QUERY }] })
      .then(user => {
        if (user.data?.createUser) {
          router.push('/');
        }
      })
      .catch(console.error);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Title>sick<span>fits</span></Title>
        <FormElement>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            {...register(FIELD_NAMES.NAME, VALIDATION_SCHEMA.NAME)}
          />
          {errors[FIELD_NAMES.NAME] && (
            <small>{errors[FIELD_NAMES.NAME].message}</small>
          )}
        </FormElement>
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
            placeholder="Password"
            {...register(FIELD_NAMES.PASSWORD, VALIDATION_SCHEMA.PASSWORD)}
          />
          {errors[FIELD_NAMES.PASSWORD] && (
            <small>{errors[FIELD_NAMES.PASSWORD].message}</small>
          )}
        </FormElement>
        <MainButton type="submit" disabled={loading}>
          Sign Up
        </MainButton>
        <ButtonsContainer>
          <ButtonLink type="button" onClick={() => onChange(SCREENS.SIGN_IN)}>I already have an account</ButtonLink>
        </ButtonsContainer>
        {error && <Error error={error} />}
      </FormContent>
    </Form>
  );
}
