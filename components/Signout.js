import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./Nav";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => {
  const [
    signoutMutation,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(SIGNOUT_MUTATION);
  return (
    <button
      onClick={() =>
        signoutMutation({
          refetchQueries: [{ query: CURRENT_USER_QUERY }]
        })
      }
    >
      Sign Out
    </button>
  );
};

export default Signout;
