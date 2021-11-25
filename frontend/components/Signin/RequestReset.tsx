import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";

import { FormElement } from '../styles/Form';
import { MainButton } from '../styles/Button';
import { Title, Form, FormContent, ButtonsContainer, ButtonLink, SuccessText } from '../styles/Signin';
import Error from '../ErrorMessage';
import { SCREENS, FIELD_NAMES, VALIDATION_SCHEMA } from './constant';

export const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
    }
  }
`;

interface Props {
  onChange: (param: string) => void;
}

export default function RequestReset({ onChange }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [changePassword, { data, loading, error }] = useMutation(REQUEST_RESET_MUTATION);

  const onSubmit = (formData) => {
    changePassword({ variables: formData });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Title>sick<span>fits</span></Title>
        {error && <Error error={error} />}
        {data?.sendUserPasswordResetLink === null && (
          <SuccessText>¡Success! Check your email for a link</SuccessText>
        )}
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
        <MainButton type="submit" disabled={loading}>Request Reset</MainButton>
        <ButtonsContainer>
          <ButtonLink type="button" onClick={() => onChange(SCREENS.SIGN_IN)}>Return to Login</ButtonLink>
        </ButtonsContainer>
      </FormContent>
    </Form>
  );
}
