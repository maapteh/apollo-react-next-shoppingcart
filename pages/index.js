import App from '../components/App';
import {Header} from '../components/header/header';
import {ProductList} from '../components/product-list/product-list';

export default () => (
  <App>
    <Header />
    <div className="content__section">
      <ProductList />
    </div>
  </App>
);
