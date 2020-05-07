import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const SINGLE_ARTIST_QUERY = gql`
  query SINGLE_ARTIST_QUERY($id: ID!) {
    artist(where: { id: $id }) {
      id
      name
    }
  }
`;

const UPDATE_ARTIST_MUTATION = gql`
  mutation UPDATE_ARTIST_MUTATION($id: ID!, $name: String!) {
    updateArtist(id: $id, name: $name) {
      id
      name
    }
  }
`;

const UpdateArtist = ({ id }) => {
  // seems like you have to do this dumb thing where you initialize the
  // data object to how you want it, because useQuery is returning null at first.
  const { loading, error, data = { artist: {} } } = useQuery(
    SINGLE_ARTIST_QUERY,
    {
      variables: { id: id },
    }
  );
  const [
    updateArtistMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_ARTIST_MUTATION);

  const [state, setState] = useState({});
  function handleChange(e) {
    e.preventDefault();
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    setState({ ...state, [name]: val });
  }

  async function updateArtist(e) {
    e.preventDefault();
    updateArtistMutation({ variables: { id, ...state } });
    mutationError && console.log(mutationError);
  }

  if (loading) return <p>Loading</p>;
  return (
    <Form onSubmit={updateArtist}>
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
            defaultValue={data.artist.name}
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

export default UpdateArtist;
