import React from "react";
import SingleArtist from "../components/SingleArtist";

const Artist = ({ query }) => {
  return <SingleArtist id={query.id} />;
};

export default Artist;
