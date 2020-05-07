import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const SINGLE_COMPOSER_QUERY = gql`
  query SINGLE_COMPOSER_QUERY($id: ID!) {
    composer(where: { id: $id }) {
      id
      name
    }
  }
`;

const UPDATE_COMPOSER_MUTATION = gql`
  mutation UPDATE_COMPOSER_MUTATION($id: ID!, $name: String!) {
    updateComposer(id: $id, name: $name) {
      id
      name
    }
  }
`;

const UpdateComposer = ({ id }) => {
  // seems like you have to do this dumb thing where you initialize the
  // data object to how you want it, because useQuery is returning null at first.
  const { loading, error, data = { composer: {} } } = useQuery(
    SINGLE_COMPOSER_QUERY,
    {
      variables: { id: id },
    }
  );
  const [
    updateComposerMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_COMPOSER_MUTATION);

  const [state, setState] = useState({});
  function handleChange(e) {
    e.preventDefault();
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    setState({ ...state, [name]: val });
  }

  async function updateComposer(e) {
    e.preventDefault();
    updateComposerMutation({ variables: { id, ...state } });
    mutationError && console.log(mutationError);
  }

  if (loading) return <p>Loading</p>;
  return (
    <Form onSubmit={updateComposer}>
      <Error error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            defaultValue={data.composer.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">
          Sav{mutationLoading ? "ing" : "e"} Changes
        </button>
      </fieldset>
    </Form>
  );
};

export default UpdateComposer;
