import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-main">
      <span className="nav-header">
        <Link to="/" className="link">
          MyAnimeList
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
