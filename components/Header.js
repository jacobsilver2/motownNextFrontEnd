import React, { useState } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import Search from "./Search";
import { ProgressBar } from "primereact/progressbar";

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  /* transform: skew(-7deg); */
  a {
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.blue};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.offWhite};
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${(props) => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  }
`;

const Header = () => {
  const [loadingState, setLoadingState] = useState(false);

  Router.onRouteChangeStart = () => {
    setLoadingState(true);
  };
  Router.onRouteChangeComplete = () => {
    setLoadingState(false);
  };

  Router.onRouteChangeError = () => {
    setLoadingState(false);
  };
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>Motown DB</a>
          </Link>
        </Logo>
        <Nav />
      </div>
      {loadingState && (
        <ProgressBar style={{ height: "5px" }} mode="indeterminate" />
      )}
      <div className="sub-bar">
        <Search />
      </div>
    </StyledHeader>
  );
};

export default Header;
