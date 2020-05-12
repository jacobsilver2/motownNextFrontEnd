import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import Link from "next/link";
import { Card } from "primereact/card";
import ComponentCard from "./Card";
import formatDate from "../lib/formatDate";

const SingleAlbumStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${(props) => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  .title {
    text-align: center;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const TitleCard = styled(Card)`
  text-align: center;
`;

const SongsCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr;
  .p-card-title {
    text-align: center;
  }
`;
const SongsCardComponent = styled(ComponentCard)`
  display: grid;
  grid-template-columns: 1fr;
  .p-card-title {
    text-align: center;
  }
`;

const SongsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  .p-card-title {
    text-align: left;
  }
  @media screen and (max-width: 970px) {
	      grid-template-columns: 1fr;
	    }
`;

const SINGLE_ALBUM_QUERY = gql`
  query SINGLE_ALBUM_QUERY($id: ID!) {
    album(where: { id: $id }) {
      id
      title
      catalogNumber
      format
      info
      releaseDate
      recordLabel
      songs {
        id
        title
        composer {
          id
          name
        }
      }
      artists {
        id
        name
      }
      recordings {
        producer
        location
        completed
        albums {
          id
          title
        }
        song {
          id
          title
        }
      }
    }
  }
`;

const SingleAlbum = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_ALBUM_QUERY, {
    variables: { id },
  });
  if (error) return <ErrorMessage error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data.album) return <p>No album found for {id}</p>;
  const {
    title,
    catalogNumber,
    format,
    info,
    releaseDate,
    recordLabel,
    songs,
    artists,
    recordings,
  } = data.album;
  const artistNames = artists.map((artist, index) => {
    let trailingChar = ", ";
    if (artists && index === artists.length - 2) {
      trailingChar = "& ";
    }
    if (artists && !artists[index + 1]) {
      trailingChar = "";
    }
    return (
      <span key={artist.id}>
        <Link href={{ pathname: "/artist", query: { id: artist.id } }}>
          <a>{artist.name} </a>
        </Link>
        {trailingChar}
      </span>
    );
  });
  return (
    <>
      <ComponentCard isTitle title={title} subTitle={artistNames}>
        {catalogNumber && (
          <h3 className="recordlabel">Catalog Number: {catalogNumber}</h3>
        )}
        {format && <h3 className="format">Format: {format}</h3>}
        {releaseDate && (
          <h3 className="releasedate">
            Release Date: {formatDate(releaseDate)}
          </h3>
        )}
        {recordLabel && (
          <h3 className="recordlabel">Record Label: {recordLabel}</h3>
        )}
        {info && <h3 className="additionalinfo">Additional Info: {info}</h3>}
      </ComponentCard>
      <SongsCardComponent title={`Songs on ${title} (in alphabetical order):`}>
        <SongsList>
          {songs.map((song) => {
            const composerNames = song.composer.map((comp, index) => {
              let trailingChar = ", ";
              if (song.composer && index === song.composer.length - 2) {
                trailingChar = "& ";
              }
              if (song.composer && !song.composer[index + 1]) {
                trailingChar = "";
              }
              return (
                <span key={comp.id}>
                  <Link
                    href={{ pathname: "/composer", query: { id: comp.id } }}
                  >
                    <a>{comp.name} </a>
                  </Link>
                  {trailingChar}
                </span>
              );
            });
            const songLink = (
              <Link href={{ pathname: "/song", query: { id: song.id } }}>
                <a>{song.title}</a>
              </Link>
            );

            const songInfo = recordings.map((recording) => {
              if (recording.song.title === song.title) {
                return (
                  <>
                    {recording.producer && (
                      <li>Produced By: {recording.producer}</li>
                    )}
                    {recording.location && (
                      <li>Recording Location: {recording.location}</li>
                    )}
                    {recording.completed && (
                      <li>Completed: {formatDate(recording.completed)}</li>
                    )}
                  </>
                );
              }
            });
            return (
              <ComponentCard title={songLink} subTitle={composerNames}>
                <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                  {songInfo}
                </ul>
              </ComponentCard>
            );
          })}
        </SongsList>
      </SongsCardComponent>
    </>
  );
};

export default SingleAlbum;
