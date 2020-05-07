import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
// import { Card } from "primereact/card";
import Card from "./Card";
import { Button } from "primereact/button";
import { CURRENT_USER_QUERY } from "./Nav";

const Composer = ({ composer }) => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
  const footer = data.me ? (
    <span>
      <Link href={{ pathname: "/updatecomposer", query: { id: composer.id } }}>
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
      <Link href={{ pathname: "/composer", query: { id: composer.id } }}>
        <a>{composer.name}</a>
      </Link>
    </span>
  );
  return <Card title={title} footer={footer} />;
};

export default Composer;
