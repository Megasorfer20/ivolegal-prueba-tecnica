import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/API/graphql",
  cache: new InMemoryCache(),
});

export default client;
