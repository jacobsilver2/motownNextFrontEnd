import React from "react";
import SingleComposer from "../components/SingleComposer";

const Composer = ({ query }) => {
  return <SingleComposer id={query.id} />;
};

export default Composer;
