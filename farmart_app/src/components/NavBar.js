import React, { useContext } from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom"; 
import { CartContext } from './MyCartContext';

function Navbar () {
  const { getTotalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="farm">Farm</span><span className="art">art</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/signup">Account</Link>
        </li>
        <li>
          <Link to="/cart">My Cart ({getTotalItems()})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;