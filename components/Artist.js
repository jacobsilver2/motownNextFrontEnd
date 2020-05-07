import React from "react";
import { useQuery } from "@apollo/react-hooks";
// import { Card } from "primereact/card";
import Card from "./Card";
import { Button } from "primereact/button";
import { CURRENT_USER_QUERY } from "./Nav";
import Link from "next/link";

const Artist = ({ artist }) => {
  const { id, name } = artist;
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
  const footer = data.me ? (
    <span>
      <Link href={{ pathname: "/updateartist", query: { id: artist.id } }}>
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
      <Link href={{ pathname: "/artist", query: { id } }}>
        <a>{name}</a>
      </Link>
    </span>
  );
  return <Card title={title} footer={footer} />;
};

export default Artist;
