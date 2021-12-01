import { SINGLE_ITEM_QUERY } from "../pages/product/[id]";
import { ALL_PRODUCTS_QUERY } from "../components/Products/our-products";
import { PAGINATION_QUERY } from "../components/Products/pagination";
import { GraphQLError } from "graphql";

export const ALL_PRODUCTS_MOCK = {
  request: {
    query: ALL_PRODUCTS_QUERY,
    variables: { skip: 0, first: 8 }
  },
  result: {
    data: {
      allProducts: [
        {
          id: "6053508fa56127c4355c4e26",
          name: "Airmax 270",
          price: 5234,
          photo: {
            id: "6053508fa56127c4355c4e25",
            image: {
              publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg"
            }
          }
        },
        {
          id: "6053508fa56127c4355c4e28",
          name: "KITH Hoodie",
          price: 22999,
          photo: {
            id: "6053508fa56127c4355c4e27",
            image: {
              publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg"
            }
          }
        },
        {
          id: "6053508fa56127c4355c4e2a",
          name: "Fanorak",
          price: 25342,
          photo: {
            id: "6053508fa56127c4355c4e29",
            image: {
              publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png"
            }
          }
        },
        {
          id: "60535090a56127c4355c4e2c",
          name: "Nike Vapormax",
          price: 83456,
          photo: {
            id: "6053508fa56127c4355c4e2b",
            image: {
              publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg"
            }
          }
        },
        {
          id: "60535090a56127c4355c4e2e",
          name: "Yeti Cooler",
          price: 75654,
          photo: {
            id: "60535090a56127c4355c4e2d",
            image: {
              publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg"
            }
          }
        },
        {
          id: "60535090a56127c4355c4e30",
          name: "Naked and Famous Denim",
          price: 10924,
          photo: {
            id: "60535090a56127c4355c4e2f",
            image: {
              publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg"
            }
          }
        },
        {
          id: "60535090a56127c4355c4e32",
          name: "Rimowa Luggage",
          price: 47734,
          photo: {
            id: "60535090a56127c4355c4e31",
            image: {
              publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png"
            }
          }
        },
        {
          id: "60535090a56127c4355c4e34",
          name: "Black Hole ",
          price: 4534,
          photo: {
            id: "60535090a56127c4355c4e33",
            image: {
              publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg"
            }
          }
        }
      ]
    }
  }
};

export const PAGINATION_QUERY_MOCK = {
  request: {
    query: PAGINATION_QUERY,
    variables: {}
  },
  result: {
    data: {
      _allProductsMeta: {
        count: 13
      }
    }
  }
};

export const SINGLE_ITEM_ERROR_MOCK = {
  request: {
    query: SINGLE_ITEM_QUERY,
    variables: { id: "1" }
  },
  result: {
    errors: [new GraphQLError('Custom error')]
  }
};

export const SINGLE_ITEM_MOCK = {
  request: {
    query: SINGLE_ITEM_QUERY,
    variables: { id: "1" }
  },
  result: {
    data: {
      Product: {
        name: "KITH Hoodie",
        price: 22999,
        description: "Love this hoodie is the best in the World",
        photo: {
          altText: "Love this hoodie",
          image: {
            publicUrlTransformed: "https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg"
          }
        }
      }
    }
  }
};
