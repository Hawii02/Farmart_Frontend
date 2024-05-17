import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="Parent">
        <div className="navbar-app">
          <NavBar />
        </div>
         <div className="sidebar-app">
          < Sidebar />
        </div>    
          <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
          </div>
        </div>
      
    </Router>
  )
}

export default App;
