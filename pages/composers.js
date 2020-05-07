import React from "react";
import AllComposers from "../components/Composers";

const Composers = props => (
  <div>
    <AllComposers page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Composers;
