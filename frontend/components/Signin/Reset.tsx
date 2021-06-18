import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";

import { FormElement } from '../styles/Form';
import { MainButton } from '../styles/Button';
import { Title, Form, FormContent, SuccessText } from '../styles/Signin';
import Error from '../ErrorMessage';
import { FIELD_NAMES, VALIDATION_SCHEMA } from './constant';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

interface Props {
  token: string;
}

export default function Reset({ token }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION);

  const onSubmit = (formData) => {
    reset({ variables: { ...formData, token }})
      .then(user => {
        console.log('user', user);
      })
      .catch(console.error);
  };

  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Title>Reset Your Password</Title>
        {(error || successfulError) && <Error error={error || successfulError} />}
        {data?.redeemUserPasswordResetToken === null && (
          <SuccessText>¡Success! You can now sign in</SuccessText>
        )}
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
          Request Reset
        </MainButton>
      </FormContent>
    </Form>
  );
}
