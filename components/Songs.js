import React, { useState } from "react";
import Router from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { perPage } from "../config";
import Song from "../components/Song";
import Pagination from "../components/Pagination";
import { SelectButton } from "primereact/selectbutton";
import { selectButtonsAthruZWithNumber } from "../lib/selectButtons";
import sortBySelectItems from "../lib/sortByOptions/songsSortBySelectItems";
import Center from "./styles/Center";
import MultiList from "./styles/Multilist";
import customTheme from "./styles/reactSelectTheme";
import getSelectLabel from "../lib/sortByOptions/sortBySelectReturnLabel";

export const ALL_SONGS_QUERY = gql`
  query ALL_SONGS_QUERY($skip: Int = 0, $first: Int = ${perPage}, $sortBy: SongOrderByInput!) {
    songs(first: $first, skip: $skip, orderBy: $sortBy ) {
      id
      title
      publisher
      publishedDate
      composer {
        name
        id
      }
    }
  }
`;

export const ALL_SONGS_BEGINNING_WITH_QUERY = gql`
  query ALL_SONGS_BEGINNING_WITH_QUERY($skip: Int = 0, $first: Int = ${perPage}, $letter: String, $sortBy: SongOrderByInput!) {
    songs(where: {title_starts_with: $letter}, first: $first, skip: $skip, orderBy: $sortBy) {
      id
      title
      publisher
      publishedDate
      composer {
        name
        id
      }
    }
  }
`;
export const ALL_SONGS_BEGINNING_WITH_NUMBER_QUERY = gql`
  query ALL_SONGS_BEGINNING_WITH_NUMBER_QUERY($skip: Int = 0, $first: Int = ${perPage}, $sortBy: SongOrderByInput!) {
    songs(where: {OR: [{title_starts_with: "0"},{title_starts_with: "1"},{title_starts_with: "2"},{title_starts_with: "3"},{title_starts_with: "4"},{title_starts_with: "5"},{title_starts_with: "6"},{title_starts_with: "7"},{title_starts_with: "8"},{title_starts_with: "9"}]}, first: $first, skip: $skip, orderBy: $sortBy) {
      id
      title
      publisher
      publishedDate
      composer {
        name
        id
      }
    }
  }
`;

const Songs = ({ page }) => {
  const [letter, setLetter] = useState("");
  const [sortBy, setSortBy] = useState("title_ASC");
  const {
    loading: allSongsLoading,
    error: allSongsError,
    data: allSongsData,
  } = useQuery(ALL_SONGS_QUERY, {
    variables: { skip: page * perPage - perPage, first: perPage, sortBy },
  });
  const {
    loading: songsBeginningWithLoading,
    error: songsBeginningWithError,
    data: songsBeginningWithData,
  } = useQuery(ALL_SONGS_BEGINNING_WITH_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      letter,
      sortBy,
    },
  });
  const {
    loading: songsBeginningWithNumberLoading,
    error: songsBeginningWithNumberError,
    data: songsBeginningWithNumberData,
  } = useQuery(ALL_SONGS_BEGINNING_WITH_NUMBER_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      sortBy,
    },
  });

  if (
    allSongsLoading ||
    songsBeginningWithLoading ||
    songsBeginningWithNumberLoading
  )
    return <p>Loading...</p>;
  if (allSongsError || songsBeginningWithError || songsBeginningWithNumberError)
    return <p>Error :(</p>;

  let songs = "";
  if (!letter) {
    songs = allSongsData.songs.map((song) => (
      <Song key={song.id} song={song} />
    ));
  } else if (letter === "#") {
    songs = songsBeginningWithNumberData.songs.map((song) => (
      <Song key={song.id} song={song} />
    ));
  } else {
    songs = songsBeginningWithData.songs.map((song) => (
      <Song key={song.id} song={song} />
    ));
  }

  return (
    <Center>
      <SelectButton
        value={letter}
        options={selectButtonsAthruZWithNumber}
        onChange={(e) => {
          setLetter(e.value);
          Router.push({ pathname: "/songs", query: { page: 1 } });
        }}
      />
      <br />
      <Select
        options={sortBySelectItems}
        theme={customTheme}
        placeholder={`Sort by ${getSelectLabel(sortBySelectItems, sortBy)}`}
        onChange={(e) => setSortBy(e.value)}
        isSearchable
      />
      <br />
      <Pagination page={page} model="songs" letter={letter} />
      <MultiList>{songs}</MultiList>
      <Pagination page={page} model="songs" letter={letter} />
    </Center>
  );
};

export default Songs;
