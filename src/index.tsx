import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = new HttpLink({uri: process.env.REACT_APP_BACKEND_URL});

export const setClientAuthLink = (token: string) => {
    client.setLink(httpLink.concat(setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            }
        }
    })));
}

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({})
});

const token = localStorage.getItem('token');
if (token) {
    setClientAuthLink(token);
}

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
