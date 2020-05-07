import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const SINGLE_ALBUM_QUERY = gql`
  query SINGLE_ALBUM_QUERY($id: ID!) {
    album(where: { id: $id }) {
      id
      title
      catalogNumber
      format
      info
      recordLabel
    }
  }
`;

const UPDATE_ALBUM_MUTATION = gql`
  mutation UPDATE_ALBUM_MUTATION(
    $id: ID!
    $title: String!
    $catalogNumber: String
    $format: String
    $info: String
    $recordLabel: StringA
  ) {
    updateAlbum(
      id: $id
      title: $title
      catalogNumber: $catalogNumber
      format: $format
      info: $info
      recordLabel: $recordLabel
    ) {
      id
      title
    }
  }
`;

const UpdateAlbum = ({ id }) => {
  // seems like you have to do this dumb thing where you initialize the
  // data object to how you want it, because useQuery is returning null at first.
  const { loading, error, data = { album: {} } } = useQuery(
    SINGLE_ALBUM_QUERY,
    {
      variables: { id: id },
    }
  );
  const [
    updateAlbumMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_ALBUM_MUTATION);

  const [state, setState] = useState({});
  function handleChange(e) {
    e.preventDefault();
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    setState({ ...state, [name]: val });
  }

  async function updateAlbum(e) {
    e.preventDefault();
    updateAlbumMutation({ variables: { id, ...state } });
    mutationError && console.log(mutationError);
  }

  if (loading) return <p>Loading</p>;
  return (
    <Form onSubmit={(e) => updateAlbum(e)}>
      <Error error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required
            defaultValue={data.album.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="catalogNumber">
          Catalog Number
          <input
            type="text"
            id="catalogNumber"
            name="catalogNumber"
            placeholder="Catalog Number"
            required
            defaultValue={data.album.catalogNumber}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="format">
          Format
          <input
            type="text"
            id="format"
            name="format"
            placeholder="Format"
            required
            defaultValue={data.album.format}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="info">
          Info
          <input
            type="text"
            id="info"
            name="info"
            placeholder="Info"
            required
            defaultValue={data.album.info}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="recordLabel">
          Record Label
          <input
            type="text"
            id="recordLabel"
            name="recordLabel"
            placeholder="Record Label"
            defaultValue={data.album.recordLabel}
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

export default UpdateAlbum;
