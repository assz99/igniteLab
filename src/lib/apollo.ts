import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloUri = import.meta.env.VITE_APOLLO_URI;

export const client = new ApolloClient({
  uri: apolloUri,
  headers:{
    'Authorization' : `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache(),
})