
import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Farmart</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;