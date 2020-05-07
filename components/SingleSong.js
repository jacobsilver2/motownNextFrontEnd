import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import Link from "next/link";
// import { Card } from "primereact/card";
import ComponentCard from "./Card";
import formatDate from "../lib/formatDate";

const SingleSongStyles = styled.div`
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

const ComponentTitleCard = styled(ComponentCard)`
  text-align: center;
`;

const PerformedByAndRecordingspane = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SINGLE_SONG_QUERY = gql`
  query SINGLE_SONG_QUERY($id: ID!) {
    song(where: { id: $id }) {
      id
      title
      composer {
        id
        name
      }
      publisher
      publishedDate
      altTitle
      instrumental
      fromFilm
      tribute
      artists {
        id
        name
      }
      albums {
        id
        title
      }
      recordings {
        id
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

const SingleSong = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_SONG_QUERY, {
    variables: { id },
  });
  const [layout, setLayout] = useState("list");
  if (error) return <ErrorMessage error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data.song) return <p>No song found for {id}</p>;
  const {
    title,
    composer,
    publisher,
    publishedDate,
    altTitle,
    instrumental,
    fromFilm,
    tribute,
    artists,
    albums,
    recordings,
  } = data.song;

  const composerNames = composer.map((comp, index) => {
    let trailingChar = ", ";
    if (composer && index === composer.length - 2) {
      trailingChar = "& ";
    }
    if (composer && !composer[index + 1]) {
      trailingChar = "";
    }
    return (
      <span key={comp.id}>
        <Link href={{ pathname: "/composer", query: { id: comp.id } }}>
          <a>{comp.name} </a>
        </Link>
        {trailingChar}
      </span>
    );
  });

  const albumsCards = albums.map((album) => {
    return (
      <ComponentCard
        key={album.id}
        title={
          <Link href={{ pathname: "album", query: { id: album.id } }}>
            <a>{album.title}</a>
          </Link>
        }
      >
        {renderAlbumRecordings(album)}
      </ComponentCard>
    );
  });

  // const matchedAlbumRecording = recordings.filter(recording => {
  //   recording.albums.forEach(album => (
  //     album.title ===
  //   ))
  // })

  function renderAlbumRecordings(theAlbum) {
    const matchedAlbumRecordingInfo = {};
    recordings.forEach((recording) => {
      recording.albums.forEach((album) => {
        if (album.id === theAlbum.id) {
          (matchedAlbumRecordingInfo.producer = recording.producer),
            (matchedAlbumRecordingInfo.location = recording.location),
            (matchedAlbumRecordingInfo.id = recording.id),
            (matchedAlbumRecordingInfo.completed = recording.completed);
        }
      });
    });
    return (
      <ul
        key={matchedAlbumRecordingInfo.id}
        style={{ listStyleType: "none", margin: 0, padding: 0 }}
      >
        {matchedAlbumRecordingInfo.producer && (
          <li>Produced By: {matchedAlbumRecordingInfo.producer}</li>
        )}
        {matchedAlbumRecordingInfo.location && (
          <li>Recording Location: {matchedAlbumRecordingInfo.location}</li>
        )}
        {matchedAlbumRecordingInfo.completed && (
          <li>Completed: {formatDate(matchedAlbumRecordingInfo.completed)}</li>
        )}
      </ul>
    );
  }

  return (
    <>
      <ComponentCard isTitle title={title} subTitle={composerNames}>
        {altTitle && <h3 className="alttitle">Alt Title: {altTitle}</h3>}
        {publisher && <h3 className="publisher">Publisher: {publisher}</h3>}
        {publishedDate && (
          <h3 className="publisheddate">
            Published Date: {formatDate(publishedDate)}
          </h3>
        )}
        {instrumental && <h3 className="instrumental">Instrumental</h3>}
        {fromFilm && <h3 className="fromfilm">From Film: {fromFilm}</h3>}
      </ComponentCard>
      <PerformedByAndRecordingspane>
        {artists && (
          <ComponentCard title="Performed by: ">
            <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
              {artists.map((artist) => (
                <li key={artist.id}>
                  <Link href={{ pathname: "artist", query: { id: artist.id } }}>
                    <a>{artist.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </ComponentCard>
        )}
        {albums && (
          <ComponentCard
            title={`Can be heard on the album${albums.length > 1 ? "s" : ""}:`}
          >
            {albumsCards}
          </ComponentCard>
        )}
      </PerformedByAndRecordingspane>
    </>
  );
};

export default SingleSong;
