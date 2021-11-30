import { SIGNIN_MUTATION } from "../components/Signin/Index";
import { SIGNUP_MUTATION } from "../components/Signin/Register";
import { REQUEST_RESET_MUTATION } from "../components/Signin/RequestReset";
import { RESET_MUTATION } from "../components/Signin/Reset";
import { CURRENT_USER_QUERY } from "../lib/User";
import { SEARCH_PRODUCTS_QUERY } from "../components/Search";

export const SIGN_IN_MOCK = {
  request: {
    query: SIGNIN_MUTATION,
    variables: {
      email: "email@test.io",
      password: "Test12345."
    }
  },
  result: {
    data: {
      authenticateUserWithPassword: {
        item: {
          id: "123",
          email: "email@test.io",
          name: "Test"
        },
        code: "SUCCESS",
        message: "Message success"
      }
    }
  }
};

export const REGISTER_MOCK = {
  request: {
    query: SIGNUP_MUTATION,
    variables: {
      email: "email@test.io",
      name: "User Test",
      password: "Test12345."
    }
  },
  result: {
    data: {
      createUser: {
        id: "123"
      }
    }
  }
};

export const REQUEST_RESET_MOCK = {
  request: {
    query: REQUEST_RESET_MUTATION,
    variables: {
      email: "email@test.io"
    }
  },
  result: {
    data: {
      sendUserPasswordResetLink: null
    }
  }
};

export const RESET_MUTATION_MOCK = {
  request: {
    query: RESET_MUTATION,
    variables: {
      email: "email@test.io",
      password: "Test12345.",
      token: "qwerty-123"
    }
  },
  result: {
    data: {
      redeemUserPasswordResetToken: null
    }
  }
};

export const SEARCH_PRODUCTS_QUERY_MOCK = {
  request: {
    query: SEARCH_PRODUCTS_QUERY,
    variables: {
      searchTerm: "test"
    }
  },
  result: {
    data: {
      searchTerms: [
        {
          id: "1",
          name: "Product test",
          photo: {
            image: {
              publicUrlTransformed:
                "https://images.unsplash.com/photo-1577801599718-f4e3ad3fc794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            }
          }
        },
        {
          id: "2",
          name: "Product test 2",
          photo: {
            image: {
              publicUrlTransformed:
                "https://images.unsplash.com/photo-1577801599718-f4e3ad3fc794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            }
          }
        }
      ]
    }
  }
};

export const CURRENT_USER_MOCK = {
  request: {
    query: CURRENT_USER_QUERY,
    variables: {}
  },
  result: {
    data: {
      authenticatedItem: {
        id: "123",
        email: "email@test.io",
        name: "Test",
        cart: [
          {
            id: "60c0ccb2ee21ed0bdb64896a",
            quantity: 1,
            product: {
              id: "6053508fa56127c4355c4e26",
              price: 5234,
              name: "Airmax 270",
              description: "Great shoes!",
              photo: {
                image: {
                  publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg",
                  __typename: "CloudinaryImage_File"
                },
                __typename: "ProductImage"
              },
              __typename: "Product"
            },
            __typename: "CartItem"
          },
          {
            id: "60d485e7c157c8d0f7aeffd2",
            quantity: 1,
            product: {
              id: "6053508fa56127c4355c4e28",
              price: 22999,
              name: "KITH Hoodie",
              description: "Love this hoodie is the best in the World",
              photo: {
                image: {
                  publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg",
                  __typename: "CloudinaryImage_File"
                },
                __typename: "ProductImage"
              },
              __typename: "Product"
            },
            __typename: "CartItem"
          }
        ],
        wishlist: [
          {
            id: "60d485f0c157c8d0f7aeffd4",
            isChecked: true,
            product: {
              id: "6053508fa56127c4355c4e2a",
              price: 25342,
              name: "Fanorak",
              photo: {
                image: {
                  publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png",
                  __typename: "CloudinaryImage_File"
                },
                __typename: "ProductImage"
              },
              __typename: "Product"
            },
            __typename: "WishList"
          },
          {
            id: "60d485f3c157c8d0f7aeffd5",
            isChecked: true,
            product: {
              id: "6053508fa56127c4355c4e26",
              price: 5234,
              name: "Airmax 270",
              photo: {
                image: {
                  publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg",
                  __typename: "CloudinaryImage_File"
                },
                __typename: "ProductImage"
              },
              __typename: "Product"
            },
            __typename: "WishList"
          }
        ],
        __typename: "User"
      }
    }
  }
};
