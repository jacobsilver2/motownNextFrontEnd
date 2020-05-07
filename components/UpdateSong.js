import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const SINGLE_SONG_QUERY = gql`
  query SINGLE_SONG_QUERY($id: ID!) {
    song(where: { id: $id }) {
      id
      title
      publisher
      altTitle
      fromFilm
      tribute
    }
  }
`;

const UPDATE_SONG_MUTATION = gql`
  mutation UPDATE_SONG_MUTATION(
    $id: ID!
    $title: String!
    $publisher: String
    $altTitle: String
    $fromFilm: String
    $tribute: String
  ) {
    updateSong(
      id: $id
      title: $title
      publisher: $publisher
      altTitle: $altTitle
      fromFilm: $fromFilm
      tribute: $tribute
    ) {
      id
      title
    }
  }
`;

const UpdateSong = ({ id }) => {
  // seems like you have to do this dumb thing where you initialize the
  // data object to how you want it, because useQuery is returning null at first.
  const { loading, error, data = { song: {} } } = useQuery(SINGLE_SONG_QUERY, {
    variables: { id: id },
  });
  const [
    updateSongMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_SONG_MUTATION);

  const [state, setState] = useState({});

  function handleChange(e) {
    e.preventDefault();
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    setState({ ...state, [name]: val });
  }

  async function updateSong(e) {
    e.preventDefault();
    updateSongMutation({ variables: { id, ...state } });
    mutationError && console.log(mutationError);
  }

  if (loading) return <p>Loading</p>;
  return (
    <Form onSubmit={updateSong}>
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
            defaultValue={data.song.title}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="publisher">
          Publisher
          <input
            type="text"
            id="publisher"
            name="publisher"
            placeholder="Title"
            defaultValue={data.song.publisher}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="altTitle">
          Alt Title
          <input
            type="text"
            id="altTitle"
            name="altTitle"
            placeholder="Alt Title"
            defaultValue={data.song.altTitle}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="fromFilm">
          From Film:
          <input
            type="text"
            id="fromFilm"
            name="fromFilm"
            placeholder="From Film"
            defaultValue={data.song.fromFilm}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="tribute">
          Tribute To:
          <input
            type="text"
            id="tribute"
            name="tribute"
            placeholder="Tribute"
            defaultValue={data.song.tribute}
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

export default UpdateSong;
export { UPDATE_SONG_MUTATION };
