import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

import Error from '../components/ErrorMessage';
import { ALL_PRODUCTS_QUERY } from '../components/Products/our-products';
import { FormElement } from '../components/styles/Form';
import { MainButton } from '../components/styles/Button';
import { SELL_FIELD_NAMES, SELL_VALIDATION_SCHEMA } from '../lib/formValidations';
import { SM_BREAK_POINT } from '../lib/cssVariables';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 0 1rem;
  width: 100%;
`;

const Form = styled.form`
  background-color: var(--light-gray);
  border: 2px solid var(--white);
  border-radius: 0.25rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 33.125rem;
  padding: 2rem 3rem;
  width: 100%;

  @media (max-width: ${SM_BREAK_POINT}) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  color: var(--gray);
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    background: linear-gradient(90deg, #F52020 0%, #FAAB4D 100%);
    bottom: -1.5rem;
    content: '';
    left: 0;
    height: 0.625rem;
    position: absolute;
    right: 0;
  }
`;

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function Sell() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT_MUTATION);
  const router = useRouter();

  const onSubmit = (formData) => {
    formData[SELL_FIELD_NAMES.PRICE] = Number(formData[SELL_FIELD_NAMES.PRICE]);
    formData[SELL_FIELD_NAMES.IMAGE] = formData[SELL_FIELD_NAMES.IMAGE][0];
    createProduct({
      variables: formData,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]
    })
    .then(res => {
      reset();
      router.push({ pathname: `product/${res.data.createProduct.id}` });
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Sell your product</Title>
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
        <FormElement>
          <label htmlFor={SELL_FIELD_NAMES.IMAGE}>Image</label>
          <input
            accept="image/*"
            type="file"
            id={SELL_FIELD_NAMES.IMAGE}
            name={SELL_FIELD_NAMES.PRICE}
            {...register(SELL_FIELD_NAMES.IMAGE, SELL_VALIDATION_SCHEMA.IMAGE)}
          />
          {errors[SELL_FIELD_NAMES.IMAGE] && (
            <small>{errors[SELL_FIELD_NAMES.IMAGE].message}</small>
          )}
        </FormElement>
        <MainButton type="submit" disabled={loading}>
          Add product
        </MainButton>
        {error && <Error error={error} />}
      </Form>
    </Container>
  );
}
