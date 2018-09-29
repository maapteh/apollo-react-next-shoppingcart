import React from 'react';
import gql from 'graphql-tag';
import {ApolloConsumer} from 'react-apollo';
import {ORDER_QUERY} from '../order/graphql.order';

import './order-controls.scss';

export const OrderControls = ({items, id}) => {
  return (
    <ApolloConsumer>
      {client => (
        <div className="order">
          {items > 0 && (
            <button
              onClick={() => updateOrder(items - 1, id, client)}
              className="order__action order__action--minus"
            >
              -
            </button>
          )}
          <div className="order__quantity">{items}</div>
          <button
            onClick={() => updateOrder(items + 1, id, client)}
            className="order__action order__action--plus"
          >
            +
          </button>
        </div>
      )}
    </ApolloConsumer>
  );
};

const updateOrder = (items, id, client) => {
  client.mutate({
    mutation: gql`
      mutation orderProduct($id: ID!, $items: Int!) {
        orderProduct(id: $id, items: $items) {
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
    `,
    variables: {
      id,
      items,
    },
    update: (proxy, {data: {orderProduct}}) => {
      // In current implementation the mutation in the order allways gives the complete order back
      // Different options are possible: only added/mutated product, only succes
      proxy.writeQuery({
        query: ORDER_QUERY,
        data: {
          getOrder: orderProduct,
        },
      });
    },
  });
};
