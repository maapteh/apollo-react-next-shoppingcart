import gql from 'graphql-tag';

export const PRODUCT_QUERY = gql`
  query product($id: ID!) {
    getProduct(id: $id) {
      id
      title
      unitSize
      description
      price
      url
    }
  }
`;
