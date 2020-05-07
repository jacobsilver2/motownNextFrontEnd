import React from "react";
import SingleAlbum from "../components/SingleAlbum";

const Artist = ({ query }) => {
  return <SingleAlbum id={query.id} />;
};

export default Artist;
