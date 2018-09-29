import gql from 'graphql-tag';

export const ORDER_ITEMS_QUERY = gql`
  query getOrderItems {
    getOrder {
      totalItems
    }
  }
`;
