import React from "react";
import Nav from "./../components/Nav";
import Cube from "./../components/Cube";

const Search = () => {
  return (
    <div className="search">
      <Nav />
      <div id="search-body">
        <Cube />
        <h2>Search</h2>
      </div>
    </div>
  );
};

export default Search;
