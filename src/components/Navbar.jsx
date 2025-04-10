import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import "../App.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('dekusms');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark navbar-custom ${scrolled ? "scrolled" : ""}`}>
      <a className="navbar-brand" href="/">
        <img src="/DekuSMS-White.png" alt="DekuSMS Logo" className="navbar-logo" />
      </a>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>{t('navbar.home')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/comingsoon" onClick={() => setIsOpen(false)}>{t('navbar.enterprise')}</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#download" onClick={() => setIsOpen(false)}>{t('navbar.download')}</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/docs" onClick={() => setIsOpen(false)}>{t('navbar.documentation')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support" onClick={() => setIsOpen(false)}>{t('navbar.support')}</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </li>
          
          {/* Language Dropdown */}
          <li className="nav-item">
            <NavDropdown
              title={`🌐 ${t('navbar.language')}`}
              id="language-dropdown"
              className="nav-link-custom"
            >
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('fr')}>Français</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('es')}>Español</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('fa')}>فارسی</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('de')}>Deutsch</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('ar')}>العربية</NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
