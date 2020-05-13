import React from "react";
import Downshift, { resetIdCounter } from "downshift";
import Router from "next/router";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import debounce from "lodash.debounce";
import Select from "react-select";

import {
  DropDown as StyledDropDown,
  DropDownItem,
  SearchStyles,
} from "./styles/DropDown";
import Title from "./styles/song/title";
import customTheme from "./styles/reactSelectTheme";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: 5fr minmax(230px, 1fr);
  grid-gap: 1rem;
`;

const SEARCH_SONGS_QUERY = gql`
  query SEARCH_SONGS_QUERY($searchTerm: String!) {
    songs(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { altTitle_contains: $searchTerm }
          { fromFilm_contains: $searchTerm }
        ]
      }
    ) {
      id
      title
    }
  }
`;
const SEARCH_ARTISTS_QUERY = gql`
  query SEARCH_ARTISTS_QUERY($searchTerm: String!) {
    artists(where: { OR: [{ name_contains: $searchTerm }] }) {
      id
      name
    }
  }
`;

const SEARCH_ALBUMS_QUERY = gql`
  query SEARCH_ALBUMS_QUERY($searchTerm: String!) {
    albums(where: { OR: [{ title_contains: $searchTerm }] }) {
      id
      title
    }
  }
`;
const SEARCH_COMPOSERS_QUERY = gql`
  query SEARCH_COMPOSERS_QUERY($searchTerm: String!) {
    composers(where: { OR: [{ name_contains: $searchTerm }] }) {
      id
      name
    }
  }
`;

function routeToItem(route, item) {
  item &&
    Router.push({
      pathname: `/${route}`,
      query: {
        id: item.id,
      },
    });
}

function returnQuery(item) {
  if (item === "song") {
    return SEARCH_SONGS_QUERY;
  }
  if (item === "album") {
    return SEARCH_ALBUMS_QUERY;
  }
  if (item === "artist") {
    return SEARCH_ARTISTS_QUERY;
  }
  if (item === "composer") {
    return SEARCH_COMPOSERS_QUERY;
  }
}

const dropdownSelectItems = [
  { label: "Song", value: "song" },
  { label: "Artist", value: "artist" },
  { label: "Album", value: "album" },
  { label: "Composer", value: "composer" },
];

class AutoComplete extends React.Component {
  state = {
    items: [],
    loading: false,
    item: "song",
  };

  handleSelectChange = (event) => this.setState({ item: event.value });

  onChange = debounce(async (e, client) => {
    this.setState({ loading: true });
    const response =
      e.target.value &&
      (await client.query({
        query: returnQuery(this.state.item),
        variables: { searchTerm: e.target.value },
      }));
    e.target.value &&
      this.setState({
        items:
          response.data.songs ||
          response.data.albums ||
          response.data.composers ||
          response.data.artists,
        loading: false,
      });
  }, 350);

  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift
          onChange={(item) => routeToItem(this.state.item, item)}
          itemToString={(item) =>
            item === null ? "" : item.title || item.name
          }
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
          }) => (
            <div>
              <ApolloConsumer>
                {(client) => (
                  <StyledSearchBar>
                    <input
                      {...getInputProps({
                        type: "search",
                        placeholder: "Search",
                        id: "search",
                        className: this.state.loading ? "loading" : "",
                        onChange: (e) => {
                          e.persist();
                          this.onChange(e, client);
                        },
                      })}
                    />
                    <Select
                      theme={customTheme}
                      value={this.state.item}
                      options={dropdownSelectItems}
                      onChange={this.handleSelectChange}
                      placeholder={`Search for a${
                        this.state.item.toLowerCase().includes("a", 0)
                          ? "n"
                          : ""
                      } ${this.state.item.toLowerCase()}`}
                    />
                  </StyledSearchBar>
                )}
              </ApolloConsumer>
              {isOpen ? (
                <StyledDropDown>
                  {this.state.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ key: item.id, index, item })}
                      highlighted={index === highlightedIndex}
                    >
                      <Title>{item.title || item.name}</Title>
                    </DropDownItem>
                  ))}
                </StyledDropDown>
              ) : null}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;
