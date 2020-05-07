import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Router from "next/router";
import { gql } from "apollo-boost";
import Select from "react-select";
import Album from "./Album";
import Pagination from "../components/Pagination";
import { perPage } from "../config";
import { SelectButton } from "primereact/selectbutton";
import { selectButtonsAthruZWithNumber } from "../lib/selectButtons";
import MultiList from "./styles/Multilist";
import Center from "./styles/Center";
import customTheme from "./styles/reactSelectTheme";
import getSelectLabel from "../lib/sortByOptions/sortBySelectReturnLabel";
import sortBySelectItems from "../lib/sortByOptions/albumsSortBySelectOptions";

export const ALL_ALBUMS_QUERY = gql`
  query ALL_ALBUMS_QUERY($first: Int = ${perPage}, $skip: Int = 0, $sortBy: AlbumOrderByInput!) {
    albums(where: {single: false}, first: $first, skip: $skip, orderBy: $sortBy ) {
      id
      title
      recordLabel
      releaseDate
      format
      catalogNumber
      single
      artists {
        id
        name
      }
    }
  }
`;

export const ALL_ALBUMS_BEGINNING_WITH_QUERY = gql`
  query ALL_ALBUMS_BEGINNING_WITH_QUERY($skip: Int = 0, $first: Int = ${perPage}, $letter: String, $sortBy: AlbumOrderByInput!) {
    albums(where: {single: false, title_starts_with: $letter}, first: $first, skip: $skip, orderBy: $sortBy) {
      id
      title
      recordLabel
      releaseDate
      format
      catalogNumber
      single
      artists {
        id
        name
      }
    }
  }
`;

export const ALL_ALBUMS_BEGINNING_WITH_NUMBER_QUERY = gql`
  query ALL_ALBUMS_BEGINNING_WITH_NUMBER_QUERY($skip: Int = 0, $first: Int = ${perPage}, $sortBy: AlbumOrderByInput!) {
    albums(where: {single: false, OR: [{title_starts_with: "0"},{title_starts_with: "1"},{title_starts_with: "2"},{title_starts_with: "3"},{title_starts_with: "4"},{title_starts_with: "5"},{title_starts_with: "6"},{title_starts_with: "7"},{title_starts_with: "8"},{title_starts_with: "9"}]}, first: $first, skip: $skip, orderBy: $sortBy) {
      id
      title
      recordLabel
      releaseDate
      format
      catalogNumber
      single
      artists {
        id
        name
      }
    }
  }
`;

const Albums = ({ page }) => {
  const [letter, setLetter] = useState("");
  const [sortBy, setSortBy] = useState("title_ASC");
  const [checkedItems, setCheckedItems] = useState([]);

  const {
    loading: allAlbumsLoading,
    error: allAlbumsError,
    data: allAlbumsData,
  } = useQuery(ALL_ALBUMS_QUERY, {
    variables: { skip: page * perPage - perPage, first: perPage, sortBy },
  });
  const {
    loading: albumsBeginningWithLoading,
    error: albumsBeginningWithError,
    data: albumsBeginningWithData,
  } = useQuery(ALL_ALBUMS_BEGINNING_WITH_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      letter,
      sortBy,
    },
  });
  const {
    loading: albumsBeginningWithNumberLoading,
    error: albumsBeginningWithNumberError,
    data: albumsBeginningWithNumberData,
  } = useQuery(ALL_ALBUMS_BEGINNING_WITH_NUMBER_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      sortBy,
    },
  });
  if (
    albumsBeginningWithLoading ||
    allAlbumsLoading ||
    albumsBeginningWithNumberLoading
  )
    return <p>Loading...</p>;
  if (
    albumsBeginningWithError ||
    allAlbumsError ||
    albumsBeginningWithNumberError
  )
    return <p>Error :(</p>;

  function getAlbums() {
    if (letter === "" || !letter) {
      return allAlbumsData.albums.map((album) => (
        <Album
          addToCheckedItemsList={setCheckedItems}
          checkedItems={checkedItems}
          key={album.id}
          album={album}
        />
      ));
    } else if (letter === "#") {
      return albumsBeginningWithNumberData.albums.map((album) => (
        <Album
          key={album.id}
          album={album}
          addToCheckedItemsList={setCheckedItems}
          checkedItems={checkedItems}
        />
      ));
    } else {
      return albumsBeginningWithData.albums.map((album) => (
        <Album
          key={album.id}
          album={album}
          addToCheckedItemsList={setCheckedItems}
          checkedItems={checkedItems}
        />
      ));
    }
  }

  return (
    <Center>
      <SelectButton
        value={letter}
        options={selectButtonsAthruZWithNumber}
        onChange={(e) => {
          setLetter(e.value);
          Router.push({ pathname: "/albums", query: { page: 1 } });
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
      <Pagination page={page} model="albums" letter={letter} />
      <MultiList>{getAlbums()}</MultiList>
      <Pagination page={page} model="albums" letter={letter} />
    </Center>
  );
};

export default Albums;
