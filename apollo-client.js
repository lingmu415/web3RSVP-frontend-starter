import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/lingmu415/rsvpweb3",
  cache: new InMemoryCache(),
});

export default client;
