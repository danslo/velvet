import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {onError} from "@apollo/client/link/error";

export const client = new ApolloClient({
    cache: new InMemoryCache({}),
    defaultOptions: {
        query: {fetchPolicy: "network-only"},
        watchQuery: {fetchPolicy: "network-only"},
        mutate: {fetchPolicy: "network-only"}
    }
});

const httpLink = new HttpLink({uri: process.env.REACT_APP_BACKEND_URL});

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({extensions}) => {
            if (extensions?.category === 'graphql-authorization') {
                localStorage.removeItem('token');
                window.location.href = '/';
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
