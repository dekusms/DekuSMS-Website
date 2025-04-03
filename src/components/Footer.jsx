import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Branding */}
        <div className="footer-column">
          <h2 className="footer-logo">DekuSMS</h2>
          <p className="footer-tagline">Secure. Private. Seamless.</p>
          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} className="social-icon" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} className="social-icon" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-column">
          <h3 className="footer-title">Navigation</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/download">Download</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="footer-column">
          <h3 className="footer-title">Resources</h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Column 4: Stay Connected */}
        <div className="footer-column">
          <h3 className="footer-title">Stay Connected</h3>
          <p>Subscribe to get the latest updates and offers.</p>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DekuSMS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
