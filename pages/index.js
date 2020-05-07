import React from "react";
import Songs from "../components/Songs";

const Home = (props) => {
  return (
    <div>
      <Songs page={parseFloat(props.query.page) || 1} />
    </div>
  );
};

export default Home;
