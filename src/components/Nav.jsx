import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <NavLink className="navlink" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className="navlink" to="/search">
          <li>Search</li>
        </NavLink>
        <NavLink className="navlink" to="/about">
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
