import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint, prodEndpoint } from "../config";
import { LOCAL_STATE_QUERY } from "../components/Singles";
import { ADD_TO_LOCAL_ID_SELECTION_MUTATION } from "../components/Album";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
    onError: ({ networkError, graphQLErrors }) => {
      graphQLErrors && graphQLErrors.forEach((gqlErr) => console.log(gqlErr));
      console.log(`NetworkError: ${networkError}`);
    },
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
        },
        headers,
      });
    },
    // local state
    clientState: {
      resolvers: {
        Mutation: {
          addOrRemoveLocalIdSelection(_, variables, { cache }) {
            // read the selectedIds value from the cache
            const { selectedIds } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            // remove id from local state
            if (selectedIds.includes(variables.id)) {
              const newData = selectedIds.filter((id) => id !== variables.id);
              const data = { data: { selectedIds: newData } };
              cache.writeData(data);
              return null;
            }
            // add id to local state
            const newData = [...selectedIds, variables.id];
            const data = { data: { selectedIds: newData } };
            cache.writeData(data);
            return null;
          },
          clearSelectedIds(_, variables, { cache }) {
            const { selectedIds } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            const data = { data: { selectedIds: [] } };
            cache.writeData(data);
            return null;
          },
        },
      },
      defaults: {
        selectedIds: [],
      },
    },
  });
}

export default withApollo(createClient);
