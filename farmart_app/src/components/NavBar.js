
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
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;