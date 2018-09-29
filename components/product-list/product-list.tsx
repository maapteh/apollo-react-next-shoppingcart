import {Query} from 'react-apollo';
import Link from 'next/link';
import {ErrorMessage} from '../ErrorMessage';
import {OrderControls} from '../order-controls/order-controls';
import {Price} from '../price/price';
import {ALL_PRODUCTS_QUERY} from './graphql.all-products';
import {ORDER_QUERY} from '../order/graphql.order';
import './product.scss';

export const ProductList = () => (
  <Query query={ORDER_QUERY}>
    {({data: {getOrder}}) => {
      return (
        <Query query={ALL_PRODUCTS_QUERY}>
          {({loading, error, data: {products}}) => {
            if (error) {
              return <ErrorMessage message="Error loading products." />;
            }
            if (loading) {
              return <div>Loading</div>;
            }

            return (
              <section>
                <h1>Products</h1>
                <ul className="product-list">
                  {products.map(product => {
                    // is product in our order, and if so how many
                    const ordered =
                      getOrder &&
                      getOrder.items.find(order => order.id === product.id);
                    const items = ordered ? ordered.items : 0;

                    return (
                      <li key={product.id} className="product-list__item">
                        <Link href={`/product?id=${product.id}`}>
                          <a className="product__link">
                            <div className="product__visual">
                              <img
                                className="product__visual__image"
                                src={product.url}
                                alt={product.title}
                              />
                              <Price price={product.price} />
                            </div>

                            <strong className="product__title">
                              {product.title}
                            </strong>

                            <span className="product__unit-size">
                              {product.unitSize}
                            </span>
                          </a>
                        </Link>
                        <OrderControls id={product.id} items={items} />
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          }}
        </Query>
      );
    }}
  </Query>
);
