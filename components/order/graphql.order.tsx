import gql from 'graphql-tag';

export const ORDER_QUERY = gql`
  query getOrder {
    getOrder {
      items {
        id
        title
        items
        total
      }
      totalPrice
      totalItems
    }
  }
`;
