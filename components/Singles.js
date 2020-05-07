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
import Multilist from "./styles/Multilist";
import Center from "./styles/Center";
import sortBySelectItems from "../lib/sortByOptions/singlesSortBySelectOptions";
import getSelectLabel from "../lib/sortByOptions/sortBySelectReturnLabel";
import customTheme from "./styles/reactSelectTheme";

export const LOCAL_STATE_QUERY = gql`
  query {
    selectedIds @client
  }
`;

export const ALL_SINGLES_QUERY = gql`
  query ALL_SINGLES_QUERY($first: Int = ${perPage}, $skip: Int = 0, $sortBy: AlbumOrderByInput!) {
    albums(where: {single: true}, first: $first, skip: $skip, orderBy: $sortBy ) {
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

export const ALL_SINGLES_BEGINNING_WITH_QUERY = gql`
  query ALL_SINGLES_BEGINNING_WITH_QUERY($skip: Int = 0, $first: Int = ${perPage}, $letter: String, $sortBy: AlbumOrderByInput!) {
    albums(where: {single: true, title_starts_with: $letter}, first: $first, skip: $skip, orderBy: $sortBy) {
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

export const ALL_SINGLES_BEGINNING_WITH_NUMBER_QUERY = gql`
  query ALL_SINGLES_BEGINNING_WITH_NUMBER_QUERY($skip: Int = 0, $first: Int = ${perPage}, $sortBy: AlbumOrderByInput!) {
    albums(where: {single: true, OR: [{title_starts_with: "0"},{title_starts_with: "1"},{title_starts_with: "2"},{title_starts_with: "3"},{title_starts_with: "4"},{title_starts_with: "5"},{title_starts_with: "6"},{title_starts_with: "7"},{title_starts_with: "8"},{title_starts_with: "9"}]}, first: $first, skip: $skip, orderBy: $sortBy) {
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

const Singles = ({ page }) => {
  const [letter, setLetter] = useState("");
  const [sortBy, setSortBy] = useState("title_ASC");
  const [checkedItems, setCheckedItems] = useState([]);
  const {
    loading: localStateLoading,
    error: localStateError,
    data: localStateData,
  } = useQuery(LOCAL_STATE_QUERY);

  const {
    loading: allSinglesLoading,
    error: allSinglesError,
    data: allSinglesData,
  } = useQuery(ALL_SINGLES_QUERY, {
    variables: { skip: page * perPage - perPage, first: perPage, sortBy },
  });
  const {
    loading: singlesBeginningWithLoading,
    error: singlesBeginningWithError,
    data: singlesBeginningWithData,
  } = useQuery(ALL_SINGLES_BEGINNING_WITH_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      letter,
      sortBy,
    },
  });
  const {
    loading: singlesBeginningWithNumberLoading,
    error: singlesBeginningWithNumberError,
    data: singlesBeginningWithNumberData,
  } = useQuery(ALL_SINGLES_BEGINNING_WITH_NUMBER_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      sortBy,
    },
  });
  if (
    singlesBeginningWithLoading ||
    allSinglesLoading ||
    singlesBeginningWithNumberLoading
  )
    return <p>Loading...</p>;
  if (
    singlesBeginningWithError ||
    allSinglesError ||
    singlesBeginningWithNumberError
  )
    return <p>Error :(</p>;

  function getSingles() {
    if (letter === "" || !letter) {
      return allSinglesData.albums
        .filter((album) => album.single)
        .map((album) => <Album key={album.id} album={album} />);
    } else if (letter === "#") {
      return singlesBeginningWithNumberData.albums
        .filter((album) => album.single)
        .map((single) => <Album key={single.id} album={single} />);
    } else {
      return singlesBeginningWithData.albums
        .filter((album) => album.single)
        .map((single) => <Album key={single.id} album={single} />);
    }
  }

  return (
    <Center>
      <SelectButton
        value={letter}
        options={selectButtonsAthruZWithNumber}
        onChange={(e) => {
          setLetter(e.value);
          Router.push({ pathname: "/singles", query: { page: 1 } });
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
      <Pagination page={page} model="singles" letter={letter} />
      <Multilist>{getSingles()}</Multilist>
      <Pagination page={page} model="singles" letter={letter} />
    </Center>
  );
};

export default Singles;
