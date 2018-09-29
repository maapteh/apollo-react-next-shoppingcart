import {Query} from 'react-apollo';
import {ErrorMessage} from '../ErrorMessage';
import {OrderControls} from '../order-controls/order-controls';
import {Price} from '../price/price';
import {PRODUCT_QUERY} from './graphql.product';
import {ORDER_QUERY} from '../order/graphql.order';

export const Product = ({id}) => (
  <Query query={ORDER_QUERY}>
    {({data: {getOrder}}) => {
      const queryVars = {
        id: id.toString(),
      };

      return (
        <Query query={PRODUCT_QUERY} variables={queryVars}>
          {({loading, error, data: {getProduct}}) => {
            if (error) {
              return <ErrorMessage message="Error loading products." />;
            }
            if (loading) {
              return <div>Loading</div>;
            }

            const ordered =
              getOrder && getOrder.items.find(order => order.id === id);
            const items = ordered ? ordered.items : 0;

            return (
              <section>
                <h1>{getProduct.title}</h1>

                <div className="product__visual">
                  <img
                    className="product__visual__image"
                    src={getProduct.url}
                    alt={getProduct.title}
                  />
                  <Price price={getProduct.price} />
                </div>

                <strong>{getProduct.title}</strong>
                <br />
                <span className="product__unit-size">
                  {getProduct.unitSize}
                </span>

                <p>{getProduct.description}</p>

                <OrderControls id={getProduct.id} items={items} />
              </section>
            );
          }}
        </Query>
      );
    }}
  </Query>
);
