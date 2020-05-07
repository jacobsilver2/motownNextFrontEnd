import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
// import { Card } from "primereact/card";
import Card from "./Card";
import { Button } from "primereact/button";
import { CURRENT_USER_QUERY } from "./Nav";
import formatDate from "../lib/formatDate";

//! decided to get rid of deleting

const Song = ({ song }) => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
  const composerNames = song.composer.map((comp) => comp.name).join(", ");
  const footer = data.me ? (
    <span>
      <Link href={{ pathname: "/updatesong", query: { id: song.id } }}>
        <a>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            style={{ marginRight: ".25em" }}
          />
        </a>
      </Link>
    </span>
  ) : null;
  const title = (
    <span>
      <Link href={{ pathname: "/song", query: { id: song.id } }}>
        <a>{song.title}</a>
      </Link>
    </span>
  );
  return (
    <Card title={title} subTitle={composerNames} footer={footer}>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {song.publisher && (
          <li className="publishedby">Published By: {song.publisher}</li>
        )}
        {song.publishedDate && (
          <li className="publisheddate">
            Published Date: {formatDate(song.publishedDate)}
          </li>
        )}
      </ul>
    </Card>
  );
};

export default Song;
