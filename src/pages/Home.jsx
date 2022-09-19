import React from "react";
import Nav from "./../components/Nav";
import Cube from "./../components/Cube";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div id="home-body">
        <Cube />
        <h2>Home</h2>
      </div>
    </div>
  );
};

export default Home;
