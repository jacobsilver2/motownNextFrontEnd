import React from "react";
import AllAlbums from "../components/Albums";

const Albums = props => (
  <div>
    <AllAlbums page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Albums;
