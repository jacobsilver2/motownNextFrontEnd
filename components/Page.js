import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import AdminPanel from "./AdminPanel";
import RadnikaNext from "../public/fonts/radnikanext-medium-webfont.woff2";
import Carbon14 from "../public/fonts/Carbon14LabelerRegular.woff2";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export const theme = {
  red: "#FF0000",
  blue: "#017ad9",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Radnika Next';
    src: url(${RadnikaNext}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Radnika Next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'Radnika Next'; }
`;

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{children}</Inner>
        <AdminPanel />
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
