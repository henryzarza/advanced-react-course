import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useForm } from "react-hook-form";

import { SELL_FIELD_NAMES, SELL_VALIDATION_SCHEMA } from '../../lib/formValidations';
import { Container, Form, Title } from '../../components/styles/BigForm';
import Error from '../../components/ErrorMessage';
import { FormElement } from '../../components/styles/Form';
import { MainButton } from '../../components/styles/Button';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

interface Props {
  query: {
    id: string;
  }
}

export default function UpdatePage({ query }: Props) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const { error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id: query.id },
    onCompleted: data => {
      setValue(SELL_FIELD_NAMES.NAME, data.Product.name);
      setValue(SELL_FIELD_NAMES.DESCRIPTION, data.Product.description);
      setValue(SELL_FIELD_NAMES.PRICE, data.Product.price);
    }
  });
  const [updateProduct, { error: updateError, loading: updateLoading }] = useMutation(UPDATE_PRODUCT_MUTATION);

  if (loading) return <p>loading...</p>;

  const onSubmit = (formData) => {
    updateProduct({
      variables: {
        id: query.id,
        name: formData[SELL_FIELD_NAMES.NAME],
        description: formData[SELL_FIELD_NAMES.DESCRIPTION],
        price: Number(formData[SELL_FIELD_NAMES.PRICE]),
      },
      refetchQueries: [{ query: SINGLE_PRODUCT_QUERY, variables: { id: query.id } }]
    })
    .then(() => alert('The info was updated'))
    .catch(console.error);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Update product</Title>
        <FormElement>
          <label htmlFor={SELL_FIELD_NAMES.NAME}>Name</label>
          <input
            type="text"
            name={SELL_FIELD_NAMES.NAME}
            id={SELL_FIELD_NAMES.NAME}
            placeholder="Example"
            {...register(SELL_FIELD_NAMES.NAME, SELL_VALIDATION_SCHEMA.NAME)}
          />
          {errors[SELL_FIELD_NAMES.NAME] && (
            <small>{errors[SELL_FIELD_NAMES.NAME].message}</small>
          )}
        </FormElement>
        <FormElement>
          <label htmlFor={SELL_FIELD_NAMES.PRICE}>Price</label>
          <input
            type="number"
            name={SELL_FIELD_NAMES.PRICE}
            id={SELL_FIELD_NAMES.PRICE}
            placeholder="123"
            {...register(SELL_FIELD_NAMES.PRICE, SELL_VALIDATION_SCHEMA.PRICE)}
          />
          {errors[SELL_FIELD_NAMES.PRICE] && (
            <small>{errors[SELL_FIELD_NAMES.PRICE].message}</small>
          )}
        </FormElement>
        <FormElement>
          <label htmlFor={SELL_FIELD_NAMES.DESCRIPTION}>Description</label>
          <textarea
            name={SELL_FIELD_NAMES.DESCRIPTION}
            id={SELL_FIELD_NAMES.DESCRIPTION}
            placeholder="Your product description here"
            {...register(SELL_FIELD_NAMES.DESCRIPTION, SELL_VALIDATION_SCHEMA.DESCRIPTION)}
          />
          {errors[SELL_FIELD_NAMES.DESCRIPTION] && (
            <small>{errors[SELL_FIELD_NAMES.DESCRIPTION].message}</small>
          )}
        </FormElement>
        <MainButton type="submit" disabled={updateLoading}>
          Update product
        </MainButton>
        {error || updateError && <Error error={error || updateError} />}
      </Form>
    </Container>
  );
}
