import React from 'react'
import { Link } from "react-router-dom"; 

const NavBar = () => {
    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/">Farmart</Link>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      );
    };

export default NavBar