// import React from "react";
// import { Link } from "react-router-dom"; 
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h4>Quick Links</h4>
//           <ul>
//             <li>
//             <Link to="/signup">Sign Up</Link>
//             </li>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/products">Products</Link>
//             </li>
//             <li>
//               <Link to="/aboutus">About Us</Link>
//             </li>
//             <li>
//               <Link to="/contactus">Contact Us</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Connect With Us</h4>
//           <ul>
//             <li>Twitter</li>
//             <li>Facebook</li>
//             <li>Instagram</li>
//             <li>Tiktok</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Contact Us</h4>
//           <ul>
//             <li>Email: hello@farmart.com</li>
//             <li>Whatsapp: +254799999999</li>
//             <li>Location: Ngong Lane Plaza, Ngong Lane</li>
//           </ul>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         &copy; {new Date().getFullYear()} Farmart. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom"; 
import "./Footer.css";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="footer-icons">
          <ul>
            <li>Twitter <XIcon /></li>
            <li>Facebook <FacebookIcon/></li>
            <li>Instagram <InstagramIcon /></li>
          </ul>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: hello@farmart.com</li>
            <li>Whatsapp: +254799999999</li>
            <li>Location: Ngong Lane Plaza, Ngong Lane</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Farmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;