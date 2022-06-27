import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloUri = import.meta.env.VITE_APOLLO_URI;

console.log( apolloUri)
export const client = new ApolloClient({
  uri: apolloUri,
  cache: new InMemoryCache(),
})