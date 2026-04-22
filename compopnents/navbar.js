import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">PORTFOLIO</h2>

      <div className="nav-links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/projects" className="link">Projects</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;