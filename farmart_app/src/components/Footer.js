import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Farmart is Kenya's premier e-commerce platform dedicated to connecting farmers directly with buyers for the sale of animals. We eliminate intermediaries, ensuring fair prices and transparency for both farmers and buyers. Our mission is to support the agricultural community and provide consumers with quality livestock. Join Farmart to buy and sell livestock with ease and trust.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Farmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;