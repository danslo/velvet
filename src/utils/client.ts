import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

export const client = new ApolloClient({cache: new InMemoryCache({})});

export const setClientLink = (token: string|null) => {
    const httpLink = new HttpLink({uri: process.env.REACT_APP_BACKEND_URL});

    if (token) {
        client.setLink(httpLink.concat(setContext((_, { headers }) => {
            return {
                headers: {
                    ...headers,
                    authorization: `Bearer ${token}`,
                }
            }})));
    } else {
        client.setLink(httpLink);
    }
}

setClientLink(localStorage.getItem('token'));
