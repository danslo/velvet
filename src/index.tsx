import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";

// todo: do we really want to export this?
export const httpLink = new HttpLink({uri: "https://magento24.test/graphql"});
export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({})
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
