import React from "react";
import { FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Links */}
        <div className="footer-row">
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-row">
          <a
            href="https://github.com/dekusms/Deku-SMS-Android"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="Visit our GitHub repository"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/deku_sms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Follow us on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://t.me/deku_sms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            title="Join us on Telegram"
          >
            <FaTelegramPlane />
          </a>
        </div>

        {/* Footer Copyright */}
        <div className="footer-row">
          © DekuSMS || Afkanerd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
