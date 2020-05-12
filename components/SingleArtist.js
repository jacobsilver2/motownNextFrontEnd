import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import Link from "next/link";
// import { Card } from "primereact/card";
import ComponentCard from "./Card";

const SingleArtistStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${(props) => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  .name {
    text-align: center;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

// const TitleCard = styled(Card)`
//   text-align: center;
// `;

const AlbumsAndSongs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 970px) {
	grid-template-columns: 1fr;
  }
`;

const SINGLE_ARTIST_QUERY = gql`
  query SINGLE_ARTIST_QUERY($id: ID!) {
    artist(where: { id: $id }) {
      id
      name
      songs {
        id
        title
      }
      albums {
        id
        title
      }
    }
  }
`;

const SingleArtist = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_ARTIST_QUERY, {
    variables: { id },
  });
  if (error) return <ErrorMessage error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data.artist) return <p>No artist found for {id}</p>;
  const { name, songs, albums } = data.artist;
  return (
    <>
      <ComponentCard isTitle title={name} />
      <AlbumsAndSongs>
        {songs && (
          <ComponentCard
            title={`Songs ${name} ${
              name.includes("and") || name.includes("And") || name.includes("&")
                ? "have"
                : "has"
            } recorded:`}
          >
            <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
              {songs.map((song) => (
                <p key={song.id}>
                  <Link href={{ pathname: "song", query: { id: song.id } }}>
                    <a>{song.title}</a>
                  </Link>
                </p>
              ))}
            </ul>
          </ComponentCard>
        )}
        {albums && (
          <ComponentCard title="Can be heard on the albums:">
            <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
              {albums.map((album) => (
                <p key={album.id}>
                  <Link href={{ pathname: "album", query: { id: album.id } }}>
                    <a>{album.title}</a>
                  </Link>
                </p>
              ))}
            </ul>
          </ComponentCard>
        )}
      </AlbumsAndSongs>
    </>
  );
};

export default SingleArtist;
