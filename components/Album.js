import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import formatDate from "../lib/formatDate";
import Link from "next/link";
// import { Card } from "primereact/card";
import Card from "./Card";
// import { Button } from "primereact/button";
import Button from "./Button";
import { CURRENT_USER_QUERY } from "./Nav";
import { Checkbox } from "primereact/checkbox";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledFlexStart = styled.div`
  align-self: center;
`;

const StlyedFlexEnd = styled.div`
  align-self: flex-end;
`;

export const ADD_OR_REMOVE_LOCAL_ID_SELECTION_MUTATION = gql`
  mutation($id: String!) {
    addOrRemoveLocalIdSelection(id: $id) @client
  }
`;

export const LOCAL_STATE_QUERY = gql`
  query {
    selectedIds @client
  }
`;

const Album = ({ album }) => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
  const {
    loading: localStateQueryLoading,
    error: localStateQueryError,
    data: localStateQueryData,
  } = useQuery(LOCAL_STATE_QUERY);
  const [
    addOrRemoveLocalIdSelectionMutation,
    {
      loading: addOrRemoveLocalIdSelectionMutationLoading,
      error: addOrRemoveLocalIdSelectionMutationError,
    },
  ] = useMutation(ADD_OR_REMOVE_LOCAL_ID_SELECTION_MUTATION);

  function handleChecked(e) {
    addOrRemoveLocalIdSelectionMutation({ variables: { id: album.id } });
  }

  function isChecked(id) {
    return localStateQueryData.selectedIds.includes(id);
  }

  const footer = data.me ? (
    <StyledFooter>
      <StyledFlexStart>
        <Link href={{ pathname: "/updatealbum", query: { id: album.id } }}>
          <a>
            <Button buttonStyle="primary" icon="pi pi-pencil">
              Edit
            </Button>
          </a>
        </Link>
      </StyledFlexStart>
      <StlyedFlexEnd>
        <Checkbox
          onChange={(e) => handleChecked(e)}
          checked={isChecked(album.id)}
        />
      </StlyedFlexEnd>
    </StyledFooter>
  ) : null;
  const title = (
    <span>
      <Link href={{ pathname: "/album", query: { id: album.id } }}>
        <a>{album.title || "no title"}</a>
      </Link>
    </span>
  );
  const artists =
    album.artists &&
    album.artists.map((artist, index) => (
      <span key={artist.name}>
        <Link href={{ pathname: "/artist", query: { id: artist.id } }}>
          <a>{artist.name}</a>
        </Link>
        {album.artists.length === index + 1 ? " " : ", "}
      </span>
    ));
  return (
    <Card
      title={title}
      footer={footer}
      subTitle={
        album.releaseDate
          ? `released ${formatDate(album.releaseDate)}`
          : "no release date information"
      }
    >
      {/* {album.single && <p>Single</p>} */}
      {album.format && <div className="format">Format: {album.format}</div>}
      {album.catalogNumber && (
        <div className="catalognumber">Catalog #: {album.catalogNumber}</div>
      )}
      {artists}
    </Card>
  );
};

export default Album;
