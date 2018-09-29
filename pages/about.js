import App from '../components/App';
import {Header} from '../components/header/header';

export default () => (
  <App>
    <Header />
    <div className="content__section">
      <h1>Simple Workshop</h1>
      <p>
        <a href="https://www.apollographql.com/client/">Apollo</a> is a GraphQL
        client that allows you to easily query the exact data you need from a
        GraphQL server.
      </p>
    </div>
  </App>
);
