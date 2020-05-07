import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ALL_SONGS_QUERY } from "./Songs";

const DELETE_SONG_MUTATION = gql`
  mutation DELETE_SONG_MUTATION($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

// according to the apollo docs, cache updates happen automatically when performing a mutation
// on one item.  If you do a mutation which updates multiple items, it is necessary to perform
// a manual cache update.

// update: it seems you have to manually update the cache when performing any kind of delete
// mutation

const DeleteSong = ({ children, id }) => {
  const [
    deleteSongMutation,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(DELETE_SONG_MUTATION);
  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this song?")) {
          deleteSongMutation({
            variables: { id },
            update: cache => {
              const existingSongs = cache.readQuery({ query: ALL_SONGS_QUERY });
              const newSongs = existingSongs.songs.filter(s => s.id !== id);
              cache.writeQuery({
                query: ALL_SONGS_QUERY,
                data: { songs: newSongs }
              });
            }
          });
        }
      }}
    >
      {children}
    </button>
  );
};

export default DeleteSong;
