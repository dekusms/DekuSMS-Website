import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import i18n from "../i18n";

const Navbar = () => {
  const { t } = useTranslation("dekusms");
  const [expanded, setExpanded] = useState(false);

  const linkStyle = {
    color: "#ffffff",
    fontFamily: "'Mona Sans'",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top px-3"
      style={{
        background: "#001871",
        boxShadow:" 0px 0px 15px rgba(255, 255, 255, 0.2)",
      }}
    >
      <Link className="navbar-brand d-flex align-items-center" to="/" style={linkStyle}>
        <img
          src="/DekuSMS-Dark Theme.png"
          alt="Logo"
          style={{ height: "22px", marginRight: "8px" }}
        />
      </Link>

      <button
      className="navbar-toggler"
      type="button"
      aria-label="Toggle navigation"
      aria-expanded={expanded}
      onClick={() => setExpanded(!expanded)}
    >
      <span className="navbar-toggler-icon"></span>
    </button>


      <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => setExpanded(false)} style={linkStyle}>
              {t("navbar.home")}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="https://blog.smswithoutborders.com" onClick={() => setExpanded(false)} style={linkStyle}>
              {t("navbar.blog")}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/comingsoon" onClick={() => setExpanded(false)} style={linkStyle}>
              {t("navbar.enterprise")}
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#download" onClick={() => setExpanded(false)} style={linkStyle}>
              {t("navbar.download")}
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="https://docs.smswithoutborders.com" onClick={() => setExpanded(false)} style={linkStyle}>
              {t("navbar.documentation")}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support" onClick={() => setExpanded(false)} style={linkStyle}>
              {t("navbar.support")}
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setExpanded(false)}
              style={linkStyle}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="nav-item">
          <NavDropdown
  title={<FontAwesomeIcon icon={faGlobe} style={{ color: 'white' }} />}
  id="language-dropdown"
>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("fr")}>Français</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("es")}>Español</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("fa")}>فارسی</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("de")}>Deutsch</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("ar")}>العربية</NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
