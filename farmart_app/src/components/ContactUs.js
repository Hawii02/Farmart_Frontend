import React from 'react';
import './ContactUs.css';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions, feedback, or inquiries, please don't hesitate to get in touch with us. Our dedicated team is here to assist you.</p>
        <div className="contact-details">
          <p><strong>Email:</strong> support@farmart.co.ke</p>
          <p><strong>Phone:</strong> +254 XXX XXX XXX</p>
          <p><strong>Address:</strong> [Physical Address], Nairobi, Kenya</p>
        </div>
      </div>
      <div className="social-media">
        <h2>Connect with Us</h2>
        <p>Follow us on social media to stay updated with the latest news, offers, and events:</p>
        <ul className="social-links">
          <li> <FacebookIcon/> </li>
          <li><XIcon /> </li>
          <li><InstagramIcon /> </li>

        </ul>
      </div>
      <div className="message-form">
        <h2>Send Us a Message</h2>
        <p>Alternatively, you can use the form below to send us a message:</p>
        <form>
          <div className="form-row">
            <div className="form-field name-field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-field email-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;