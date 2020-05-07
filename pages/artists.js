import React from "react";
import AllArtists from "../components/Artists";

const Artists = props => (
  <div>
    <AllArtists page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Artists;
