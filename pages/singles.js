import React from "react";
import AllSingles from "../components/Singles";

const Albums = (props) => (
  <div>
    <AllSingles page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Albums;
