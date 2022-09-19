import React from "react";
import Nav from "./../components/Nav";
import Cube from "./../components/Cube";

const About = () => {
  return (
    <div className="about">
      <Nav />
      <div id="about-body">
        <Cube />
        <h2>About</h2>
      </div>
    </div>
  );
};

export default About;
