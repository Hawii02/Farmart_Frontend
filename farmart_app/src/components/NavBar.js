
import React, { useContext } from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom"; 
import { CartContext } from './MyCartContext';
import logo from '../Images/logo.png'

function Navbar () {
  const { getTotalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img className='logo'src={logo} alt="logo" />
          <span className="navbar-title">
            Farm<span className='art'>art</span>
          </span>
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