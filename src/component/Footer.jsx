import React from "react";
import "../Style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            We help you find the best government jobs in India. Stay updated with the latest job notifications, results, admit cards, and more.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#latest-job">Latest Jobs</a></li>
            <li><a href="#result">Results</a></li>
            <li><a href="#admit-card">Admit Cards</a></li>
            <li><a href="#answer-key">Answer Key</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: info@findjob.com</p>
          <p>Phone: +91 12345678</p>
          <div className="socials">
            <a href="#facebook"><i className="fa fa-facebook"></i></a>
            <a href="#twitter"><i className="fa fa-twitter"></i></a>
            <a href="#instagram"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FindJob | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
