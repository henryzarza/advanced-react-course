import { SIGNIN_MUTATION } from '../components/Signin/Index';
import { SIGNUP_MUTATION } from '../components/Signin/Register';
import { REQUEST_RESET_MUTATION } from '../components/Signin/RequestReset';
import { CURRENT_USER_QUERY } from '../lib/User';

export const SIGN_IN_MOCK = {
  request: {
    query: SIGNIN_MUTATION,
    variables: {
      email: 'email@test.io',
      password: 'Test12345.'
    },
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
  },
};

export const REGISTER_MOCK = {
  request: {
    query: SIGNUP_MUTATION,
    variables: {
      email: 'email@test.io',
      name: "User Test",
      password: 'Test12345.'
    },
  },
  result: {
    data: {
      createUser: {
        id: "123"
      }
    }
  },
};

export const REQUEST_RESET_MOCK = {
  request: {
    query: REQUEST_RESET_MUTATION,
    variables: {
      email: 'email@test.io'
    },
  },
  result: {
    data: {
      sendUserPasswordResetLink: null
    }
  },
};

export const CURRENT_USER_MOCK = {
  request: {
    query: CURRENT_USER_QUERY
  },
  result: {
    data: {
      authenticatedItem: {
        id: "123",
        email: "email@test.io",
        name: "Test",
        cart: [
          {
            id: "456",
            quantity: "3",
            product: {
              id: "1",
              price: "100",
              name: "Product test",
              description: "Fake product description",
              photo: {
                image: {
                  publicUrlTransformed: "https://images.unsplash.com/photo-1577801599718-f4e3ad3fc794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                }
              }
            }
          },
          {
            id: "678",
            quantity: "1",
            product: {
              id: "2",
              price: "500",
              name: "Product test 2",
              description: "Fake product description 2",
              photo: {
                image: {
                  publicUrlTransformed: "https://images.unsplash.com/photo-1577801599718-f4e3ad3fc794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                }
              }
            }
          },
        ],
        wishlist: [
          {
            id: "22",
            isChecked: true,
            product: {
              id: "678",
              price: "500",
              name: "Product test 2",
              photo: {
                image: {
                  publicUrlTransformed: "https://images.unsplash.com/photo-1577801599718-f4e3ad3fc794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                }
              }
            }
          }
        ]
      }
    }
  },
};
