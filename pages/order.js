import App from '../components/App';
import {Header} from '../components/header/header';
import {ProductList} from '../components/product-list/product-list';
import {OrderList} from '../components/order/order-list';

export default () => (
  <App>
    <Header />
    <div className="content__section">
      <OrderList />
    </div>
  </App>
);
