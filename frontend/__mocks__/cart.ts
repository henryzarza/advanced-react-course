import { ADD_TO_CART_MUTATION } from "../components/Cart/AddToCart";

export const ADD_TO_CART_MOCK = {
  request: {
    query: ADD_TO_CART_MUTATION,
    variables: {
      id: "123"
    }
  },
  result: {
    data: {
      addToCart: {
        id: "123"
      }
    }
  }
};
