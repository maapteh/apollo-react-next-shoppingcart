import gql from 'graphql-tag';

export const ALL_PRODUCTS_QUERY = gql`
  query allProducts {
    products {
      id
      title
      unitSize
      description
      price
      url
    }
  }
`;
