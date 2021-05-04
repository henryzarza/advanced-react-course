import { shape, string } from 'prop-types';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import DisplayError from '../components/ErrorMessage';
// import Form from '../components/styles/Form';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
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

export default function UpdatePage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id: query.id },
  });
  const [
    updateProduct,
    { error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);
  const { inputs, handleChange } = useForm(data?.Product);

  if (loading) return <p>loading...</p>;

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateProduct({
          variables: {
            id: query.id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        }).catch(console.error);
        console.log(res);
        // TODO: Handle Submit!!!
        // const res = await createProduct();
        // clearForm();
        // // Go to that product's page!
        // Router.push({
        //   pathname: `/product/${res.data.createProduct.id}`,
        // });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update Product</button>
      </fieldset>
    </form>
  );
}

UpdatePage.propTypes = {
  query: shape({
    id: string,
  }),
};
