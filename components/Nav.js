import React from "react";
import Link from "next/link";
import NavStyles from "./styles/navStyles";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import Signout from "./Signout";
import styled from "styled-components";

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
    }
  }
`;

const Nav = () => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
  const router = useRouter();
  // console.log(router.pathname);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const { me } = data;

  return (
    <NavStyles>
      {me && <p>{me.name}</p>}

      <Link href="/songs">
        <a style={{ color: router.pathname === "/songs" ? "#017ad9" : "" }}>
          Songs
        </a>
      </Link>
      <Link href="/artists">
        <a style={{ color: router.pathname === "/artists" ? "#017ad9" : "" }}>
          Artists
        </a>
      </Link>
      <Link href="/albums">
        <a style={{ color: router.pathname === "/albums" ? "#017ad9" : "" }}>
          Albums (LP)
        </a>
      </Link>
      <Link href="/singles">
        <a style={{ color: router.pathname === "/singles" ? "#017ad9" : "" }}>
          Singles (45)
        </a>
      </Link>
      <Link href="/composers">
        <a style={{ color: router.pathname === "/composers" ? "#017ad9" : "" }}>
          Composers
        </a>
      </Link>
      {me && <Signout />}
    </NavStyles>
  );
};

export default Nav;
