import React from "react";
import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import Router from "next/router";
import PaginationStyles from "./styles/PaginationStyles";
import { perPage } from "../config";
import { Paginator } from "primereact/paginator";

const SONGS_PAGINATION_QUERY = gql`
  query SONGS_PAGINATION_QUERY($letter: String) {
    songsConnection(where: { title_starts_with: $letter }) {
      aggregate {
        count
      }
    }
  }
`;
const SONGS_PAGINATION_WITH_NUMBER_QUERY = gql`
  query SONGS_PAGINATION_QUERY {
    songsConnection(
      where: {
        OR: [
          { title_starts_with: "0" }
          { title_starts_with: "1" }
          { title_starts_with: "2" }
          { title_starts_with: "3" }
          { title_starts_with: "4" }
          { title_starts_with: "5" }
          { title_starts_with: "6" }
          { title_starts_with: "7" }
          { title_starts_with: "8" }
          { title_starts_with: "9" }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
const ALBUMS_PAGINATION_QUERY = gql`
  query ALBUMS_PAGINATION_QUERY($letter: String) {
    albumsConnection(where: { title_starts_with: $letter }) {
      aggregate {
        count
      }
    }
  }
`;
const ALBUMS_PAGINATION_WITH_NUMBER_QUERY = gql`
  query ALBUMS_PAGINATION_QUERY {
    albumsConnection(
      where: {
        OR: [
          { title_starts_with: "0" }
          { title_starts_with: "1" }
          { title_starts_with: "2" }
          { title_starts_with: "3" }
          { title_starts_with: "4" }
          { title_starts_with: "5" }
          { title_starts_with: "6" }
          { title_starts_with: "7" }
          { title_starts_with: "8" }
          { title_starts_with: "9" }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
const ARTISTS_PAGINATION_QUERY = gql`
  query ARTISTS_PAGINATION_QUERY($letter: String) {
    artistsConnection(where: { name_starts_with: $letter }) {
      aggregate {
        count
      }
    }
  }
`;
const ARTISTS_PAGINATION_WITH_NUMBER_QUERY = gql`
  query ARTISTS_PAGINATION_QUERY {
    artistsConnection(
      where: {
        OR: [
          { name_starts_with: "0" }
          { name_starts_with: "1" }
          { name_starts_with: "2" }
          { name_starts_with: "3" }
          { name_starts_with: "4" }
          { name_starts_with: "5" }
          { name_starts_with: "6" }
          { name_starts_with: "7" }
          { name_starts_with: "8" }
          { name_starts_with: "9" }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
const COMPOSERS_PAGINATION_QUERY = gql`
  query COMPOSERS_PAGINATION_QUERY($letter: String) {
    composersConnection(where: { name_starts_with: $letter }) {
      aggregate {
        count
      }
    }
  }
`;
const COMPOSERS_PAGINATION_WITH_NUMBER_QUERY = gql`
  query COMPOSERS_PAGINATION_QUERY {
    composersConnection(
      where: {
        OR: [
          { name_starts_with: "0" }
          { name_starts_with: "1" }
          { name_starts_with: "2" }
          { name_starts_with: "3" }
          { name_starts_with: "4" }
          { name_starts_with: "5" }
          { name_starts_with: "6" }
          { name_starts_with: "7" }
          { name_starts_with: "8" }
          { name_starts_with: "9" }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({ page, model, letter }) => {
  let PAGINATION_QUERY;
  switch (model) {
    case "songs":
      letter === "#"
        ? (PAGINATION_QUERY = SONGS_PAGINATION_WITH_NUMBER_QUERY)
        : (PAGINATION_QUERY = SONGS_PAGINATION_QUERY);
      break;
    case "albums":
      letter === "#"
        ? (PAGINATION_QUERY = ALBUMS_PAGINATION_WITH_NUMBER_QUERY)
        : (PAGINATION_QUERY = ALBUMS_PAGINATION_QUERY);
      break;
    case "singles":
      letter === "#"
        ? (PAGINATION_QUERY = ALBUMS_PAGINATION_WITH_NUMBER_QUERY)
        : (PAGINATION_QUERY = ALBUMS_PAGINATION_QUERY);
      break;
    case "artists":
      PAGINATION_QUERY = ARTISTS_PAGINATION_QUERY;
      break;
    case "composers":
      PAGINATION_QUERY = COMPOSERS_PAGINATION_QUERY;
      break;
    default:
      PAGINATION_QUERY = SONGS_PAGINATION_QUERY;
  }

  const { loading, error, data } = useQuery(PAGINATION_QUERY, {
    variables: { letter: letter },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  let count;
  if (model === "songs") count = data.songsConnection.aggregate.count;
  if (model === "artists") count = data.artistsConnection.aggregate.count;
  if (model === "albums") count = data.albumsConnection.aggregate.count;
  if (model === "singles") count = data.albumsConnection.aggregate.count;
  if (model === "composers") count = data.composersConnection.aggregate.count;

  const pages = Math.ceil(count / perPage) || 1;
  return (
    <PaginationStyles>
      <Link href={{ pathname: model, query: { page: page - 1 } }}>
        <a className="prev" aria-disabled={page <= 1}>
          Prev
        </a>
      </Link>
      <p className="pagination-page-number">
        Page {page} of {pages}
      </p>
      <p className="pagination-count">
        {count} {model}
      </p>
      <Link href={{ pathname: model, query: { page: page + 1 } }}>
        <a className="next" aria-disabled={page >= pages}>
          Next
        </a>
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
