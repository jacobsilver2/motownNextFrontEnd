import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import Link from "next/link";
// import { Card } from "primereact/card";
import Card from "./Card";

const SingleComposerStyles = styled.div`
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

const SINGLE_COMPOSER_QUERY = gql`
  query SINGLE_COMPOSER_QUERY($id: ID!) {
    composer(where: { id: $id }) {
      id
      name
      songs {
        id
        title
      }
    }
  }
`;

const SingleComposer = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_COMPOSER_QUERY, {
    variables: { id },
  });
  if (error) return <ErrorMessage error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data.composer) return <p>No composer found for {id}</p>;
  // console.log(data.song);
  const { name, songs } = data.composer;
  return (
    <Card title={name}>
      <p>
        {name} has either written or co-written {songs.length} song
        {songs.length > 1 ? "s" : ""} recorded for Motown.
      </p>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {songs.map((song) => (
          <li key={song.id}>
            <Link href={{ pathname: "song", query: { id: song.id } }}>
              <a>{song.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
    // <SingleComposerStyles>
    //   <div className="details">
    //     <h1 className="name">{name}</h1>
    //     {songs && (
    //       <h2>
    //         {name} has either written or co-written {songs.length} songs:{" "}
    //         {songs.map(song => (
    //           <p key={song.id}>
    //             <Link href={{ pathname: "song", query: { id: song.id } }}>
    //               <a>{song.title}</a>
    //             </Link>
    //           </p>
    //         ))}
    //       </h2>
    //     )}
    //   </div>
    // </SingleComposerStyles>
  );
};

export default SingleComposer;
