import React from "react";
import { FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../App.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <img
            src="DekuSMS-Default.png"
            alt="Logo"
            className="footer-logo"
          />

          {/* Footer Links */}
          <ul className="footer-links">
            <li>
              <a href="https://smswithoutborders.com/privacy-policy">
                {t("privacyPolicy")}
              </a>
            </li>
            <li>
              <a href="https://docs.smswithoutborders.com/">
                {t("support")}
              </a>
            </li>
          </ul>
        </div>

        <hr className="footer-divider" />

        {/* Social Icons */}
        <div className="footer-social-icons">
          <a
            href="https://github.com/dekusms/DekuSMS-Android"
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
        <div className="footer-copyright">
          <small>2025 DekuSMS || Afkanerd</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
