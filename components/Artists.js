import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Router from "next/router";
import Select from "react-select";

import Artist from "./Artist";
import Pagination from "../components/Pagination";
import { perPage } from "../config";
import { SelectButton } from "primereact/selectbutton";
import { selectButtonsAthruZ } from "../lib/selectButtons";
import Center from "./styles/Center";
import MultiList from "./styles/Multilist";
import sortBySelectItems from "../lib/sortByOptions/artistsSortBySelectOptions";
import customTheme from "./styles/reactSelectTheme";
import getSelectLabel from "../lib/sortByOptions/sortBySelectReturnLabel";

const ALL_ARTISTS_QUERY = gql`
  query ALL_ARTISTS_QUERY($skip: Int = 0, $first: Int = ${perPage}, $sortBy: ArtistOrderByInput!) {
    artists(first: $first, skip: $skip, orderBy: $sortBy ) {
      id
      name
    }
  }
`;

export const ALL_ARTISTS_BEGINNING_WITH_QUERY = gql`
  query ALL_ARTISTS_BEGINNING_WITH_QUERY($skip: Int = 0, $first: Int = ${perPage}, $letter: String, $sortBy: ArtistOrderByInput!) {
    artists(where: {name_starts_with: $letter}, first: $first, skip: $skip, orderBy: $sortBy) {
      id
      name
    }
  }
`;

const Artists = ({ page }) => {
  const [letter, setLetter] = useState("");
  const [sortBy, setSortBy] = useState("name_ASC");
  const {
    loading: allArtistsLoading,
    error: allArtistsError,
    data: allArtistsData,
  } = useQuery(ALL_ARTISTS_QUERY, {
    variables: { skip: page * perPage - perPage, first: perPage, sortBy },
  });
  const {
    loading: artistsBeginningWithLoading,
    error: artistsBeginningWithError,
    data: artistsBeginningWithData,
  } = useQuery(ALL_ARTISTS_BEGINNING_WITH_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      letter,
      sortBy,
    },
  });

  if (allArtistsLoading || artistsBeginningWithLoading)
    return <p>Loading...</p>;
  if (allArtistsError || artistsBeginningWithError) return <p>Error :(</p>;

  const artists = !letter
    ? allArtistsData.artists.map((artist) => (
        <Artist key={artist.id} artist={artist} />
      ))
    : artistsBeginningWithData.artists.map((artist) => (
        <Artist key={artist.id} artist={artist} />
      ));

  return (
    <Center>
      <SelectButton
        value={letter}
        options={selectButtonsAthruZ}
        onChange={(e) => {
          setLetter(e.value);
          Router.push({ pathname: "/artists", query: { page: 1 } });
        }}
      />
      <br />
      {/* <StyledDropdown
        value={sortBy}
        options={sortBySelectItems}
        onChange={(e) => setSortBy(e.value)}
        placeholder="Sort By…"
      /> */}
      <Select
        options={sortBySelectItems}
        theme={customTheme}
        placeholder={`Sort by ${getSelectLabel(sortBySelectItems, sortBy)}`}
        onChange={(e) => setSortBy(e.value)}
        isSearchable
      />
      <br />
      <Pagination page={page} model="artists" letter={letter} />
      <MultiList>{artists}</MultiList>
      <Pagination page={page} model="artists" letter={letter} />
    </Center>
  );
};

export default Artists;
