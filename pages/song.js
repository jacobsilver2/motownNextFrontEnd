import React from "react";
import SingleSong from "../components/SingleSong";

const Song = ({ query }) => {
  return <SingleSong id={query.id} />;
};

export default Song;
