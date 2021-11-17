import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {onError} from "@apollo/client/link/error";

export const client = new ApolloClient({cache: new InMemoryCache({})});

const httpLink = new HttpLink({uri: process.env.REACT_APP_BACKEND_URL});

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({extensions}) => {
            if (extensions?.category === 'graphql-authorization') {
                // todo: somehow handle the redirect without relying on react-router-dom here
                localStorage.removeItem('token');
            }
        });
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = (token: string | null) => setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        }
    }
});

export const setClientLink = (token: string | null) => {
    client.setLink(from([errorLink, authLink(token), httpLink]));
}

setClientLink(localStorage.getItem('token'));
