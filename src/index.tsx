import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";

const link   = new HttpLink({uri: "https://magento24.test/graphql"});
const cache  = new InMemoryCache({});
const client = new ApolloClient({link, cache});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
