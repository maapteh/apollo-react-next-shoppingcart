import {Query} from 'react-apollo';
import {ErrorMessage} from '../ErrorMessage';
import {ORDER_QUERY} from './graphql.order';

export const OrderList = () => {
  return (
    <Query query={ORDER_QUERY}>
      {({loading, error, data: {getOrder}}) => {
        if (error) {
          return <ErrorMessage message="Error loading order." />;
        }
        if (loading) {
          return <div>Loading</div>;
        }

        return (
          <section>
            <h1>Order</h1>
            {getOrder && (
              <ul>
                {getOrder.items.map(product => (
                  <li key={product.id}>
                    <div>
                      {product.items}x {product.title} - {product.total}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <p>totaal prijs: {getOrder.totalPrice}</p>
            <p>aantal items: {getOrder.totalItems}</p>
          </section>
        );
      }}
    </Query>
  );
};
