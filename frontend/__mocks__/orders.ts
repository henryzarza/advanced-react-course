import { USER_ORDERS_QUERY } from "../pages/orders";
import { SINGLE_ORDER_QUERY } from "../pages/order/[id]";
import { GraphQLError } from "graphql";

export const USER_ORDERS_MOCK = {
  request: {
    query: USER_ORDERS_QUERY,
    variables: {}
  },
  result: {
    data: {
      allOrders: [
        {
          id: "6080a93773332d310a94fd53",
          charge: "pi_1IiofyFef7P7DnVREb1VFRfK",
          total: 350448,
          user: {
            id: "60809ddaf0fd7e293b7d84d3"
          },
          items: [
            {
              id: "6080a93773332d310a94fd50",
              name: "Goose",
              description: "Keep warm.",
              price: 74544,
              quantity: 1,
              photo: {
                image: {
                  publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg"
                }
              }
            },
            {
              id: "6080a93773332d310a94fd51",
              name: "KITH Hoodie",
              description: "Love this hoodie",
              price: 23562,
              quantity: 1,
              photo: {
                image: {
                  publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg"
                }
              }
            },
            {
              id: "6080a93773332d310a94fd52",
              name: "Fanorak",
              description: "Super hip. Comes in a number of colours",
              price: 252342,
              quantity: 1,
              photo: {
                image: {
                  publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png"
                }
              }
            }
          ]
        },
        {
          id: "6080a9ad73332d310a94fd56",
          charge: "pi_1IiohrFef7P7DnVR83eR1iFU",
          total: 74544,
          user: {
            id: "60809ddaf0fd7e293b7d84d3"
          },
          items: [
            {
              id: "6080a9ad73332d310a94fd55",
              name: "Goose",
              description: "Keep warm.",
              price: 74544,
              quantity: 1,
              photo: {
                image: {
                  publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg"
                }
              }
            }
          ]
        }
      ]
    }
  }
};

export const USER_ORDERS_ERROR_MOCK = {
  request: {
    query: USER_ORDERS_QUERY,
    variables: {}
  },
  result: {
    errors: [new GraphQLError('Custom error')]
  }
};

export const SINGLE_ORDER_MOCK = {
  request: {
    query: SINGLE_ORDER_QUERY,
    variables: {
      id: "1"
    }
  },
  result: {
    data: {
      order: {
        id: "1",
        charge: "pi_1IiohrFef7P7DnVR83eR1iFU",
        total: 74544,
        items: [
          {
            id: "6080a9ad73332d310a94fd55",
            name: "Goose",
            description: "Keep warm.",
            price: 74544,
            quantity: 1,
            photo: {
              image: {
                publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg"
              }
            }
          }
        ]
      }
    }
  }
};
