import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {client} from "./utils/client";
import {ApolloProvider} from "react-apollo";

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
