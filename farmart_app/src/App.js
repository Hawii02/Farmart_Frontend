import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MyCart from "./components/MyCart";
import Farmers from "./components/Farmers";
import { CartProvider } from "./components/MyCartContext"; 
import AnimalDetails from './components/AnimalDetails'
import "./styles/App.css";
import AddAnimal from "./components/AddAnimal";
import ConfirmRejectOrder from "./components/ConfirmRejectOrder";
import UpdateAnimal from "./components/UpdateAnimal";


function App() {
  return (
    <CartProvider>
    <Router>
      {/* <div className="Parent">
        <div className="navbar-app">
          <NavBar />
        </div>  
      <div className="routes"> */}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<MyCart />} /> 
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/addanimal" element={<AddAnimal />} />
          {/* <Route path="/confirmrejectorder" element={<ConfirmRejectOrder/>} /> */}
          <Route path="/updateanimal" element={<UpdateAnimal />} />
          <Route path='/animal/:id' element={<AnimalDetails />} /> 
        </Routes>
      {/* </div>
    </div> */}
    </Router>
    </CartProvider>
  )
}

export default App;



