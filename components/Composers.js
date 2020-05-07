import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import Router from "next/router";
import { gql } from "apollo-boost";
import Select from "react-select";

import Composer from "./Composer";
import Pagination from "../components/Pagination";
import { perPage } from "../config";
import { SelectButton } from "primereact/selectbutton";
import { selectButtonsAthruZ } from "../lib/selectButtons";
import Center from "./styles/Center";
import MultiList from "./styles/Multilist";
import sortBySelectItems from "../lib/sortByOptions/composersSortBySelectOptions";
import customTheme from "./styles/reactSelectTheme";
import getSelectLabel from "../lib/sortByOptions/sortBySelectReturnLabel";

const ALL_COMPOSERS_QUERY = gql`
  query ALL_COMPOSERS_QUERY($skip: Int = 0, $first: Int = ${perPage}, $sortBy: ComposerOrderByInput!) {
    composers(first: $first, skip: $skip, orderBy: $sortBy ) {
      id
      name
    }
  }
`;

export const ALL_COMPOSERS_BEGINNING_WITH_QUERY = gql`
  query ALL_COMPOSERS_BEGINNING_WITH_QUERY($skip: Int = 0, $first: Int = ${perPage}, $letter: String, $sortBy: ComposerOrderByInput!) {
    composers(where: {name_starts_with: $letter}, first: $first, skip: $skip, orderBy: $sortBy) {
      id
      name
    }
  }
`;

const Composers = ({ page }) => {
  const [letter, setLetter] = useState("");
  const [sortBy, setSortBy] = useState("name_ASC");
  const {
    loading: allComposersLoading,
    error: allComposersError,
    data: allComposersData,
  } = useQuery(ALL_COMPOSERS_QUERY, {
    variables: { skip: page * perPage - perPage, first: perPage, sortBy },
  });
  const {
    loading: composersBeginningWithLoading,
    error: composersBeginningWithError,
    data: composersBeginningWithData,
  } = useQuery(ALL_COMPOSERS_BEGINNING_WITH_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      letter,
      sortBy,
    },
  });
  if (allComposersLoading || composersBeginningWithLoading)
    return <p>Loading...</p>;
  if (allComposersError || composersBeginningWithError) return <p>Error :(</p>;

  const composers = !letter
    ? allComposersData.composers.map((composer) => (
        <Composer key={composer.id} composer={composer} />
      ))
    : composersBeginningWithData.composers.map((composer) => (
        <Composer key={composer.id} composer={composer} />
      ));

  return (
    <Center>
      <SelectButton
        value={letter}
        options={selectButtonsAthruZ}
        onChange={(e) => {
          setLetter(e.value);
          Router.push({ pathname: "/composers", query: { page: 1 } });
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
      <Pagination page={page} model="composers" letter={letter} />
      <MultiList>{composers}</MultiList>
      <Pagination page={page} model="composers" letter={letter} />
    </Center>
  );
};

export default Composers;
