import React from "react";
import { FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer py-5 bg-dark text-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <img
            src="DekuSMS-Dark Theme.png"
            alt="Logo"
            className="img-fluid"
            style={{ height: "30px" }}
          />

          <ul className="list-inline mb-0">
            <li className="list-inline-item mx-3">
              <a href="https://smswithoutborders.com/privacy-policy" className="footer-link text-white">
                Privacy Policy
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="https://docs.smswithoutborders.com/" className="footer-link text-white">
                Support
              </a>
            </li>
          </ul>
        </div>
        
        <hr className="border-light" />
        
        <div className="footer-social-icons text-center mb-4">
          <a
            href="https://github.com/dekusms/DekuSMS-Android"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="Visit our GitHub repository"
            className="social-icon mx-3 text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/deku_sms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Follow us on Twitter"
            className="social-icon mx-3 text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://t.me/deku_sms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            title="Join us on Telegram"
            className="social-icon mx-3 text-white"
          >
            <FaTelegramPlane size={24} />
          </a>
        </div>
        
        <div className="footer-copyright text-center mt-4">
          <small>© 2025 DekuSMS || Afkanerd</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
