import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { t } = useTranslation("dekusms");
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langRef = useRef(null);

  const handleMouseEnter = (id) => setHovered(id);
  const handleMouseLeave = () => setHovered(null);

  const toggleLangMenu = () => setShowLangMenu(!showLangMenu);

  const handleClickOutside = (event) => {
    if (langRef.current && !langRef.current.contains(event.target)) {
      setShowLangMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "fa", label: "فارسی", flag: "🇮🇷" },
    { code: "ar", label: "العربية", flag: "🇸🇦" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "it", label: "Italiano", flag: "🇮🇹" },
    { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  ];

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      fixed="top"
      className="py-2"
      style={{
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(135deg, #0f2027cc, #203a43cc, #0f2027cc)",
        fontFamily: "'Unbounded', 'Mona Sans'",
        zIndex: 1000,
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="fw-bold fs-5 text-white d-flex align-items-center gap-2"
        >
          <img src="logo/DekuSMS-Dark Theme.png" alt="Logo" style={{ height: "22px" }} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            borderColor: "#ffffff",
            borderRadius: "6px",
            backgroundColor: "#2ED3B7",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)", WebkitFilter: "invert(1)" }}
          />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3 mt-3 mt-lg-0">
            {[
              {
                href: "https://blog.smswithoutborders.com",
                labels: t("navbar.blog"),
                external: true,
              },
              {
                href: "https://docs.smswithoutborders.com",
                labels: t("navbar.documentation"),
                external: true,
              },
              {
                href: "https://opencollective.com/dekusms",
                labels: t("navbar.support"),
                external: true,
              },
              { to: "/download", labels: t("navbar.download"), external: false },
            ].map((item, index) => (
              <Nav.Link
                key={index}
                as={item.to ? Link : "a"}
                to={item.to}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setExpanded(false)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  ...(hovered === index ? { color: "#2ED3B7" } : {}),
                }}
              >
                {item.labels}
              </Nav.Link>
            ))}

            <Nav.Link
              href="https://github.com/dekusms/DekuSMS-Android"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setExpanded(false)}
              onMouseEnter={() => handleMouseEnter("github")}
              onMouseLeave={handleMouseLeave}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                transition: "color 0.3s ease",
                ...(hovered === "github" ? { color: "#2ED3B7" } : {}),
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>

            {/* Language Selector */}
            <div className="position-relative" ref={langRef}>
              <button
                onClick={toggleLangMenu}
                className="btn btn-sm px-3 py-2"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 500,
                }}
              >
                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                <span style={{ fontSize: "18px", marginRight: "8px" }}>
                  {languages.find((l) => l.code === i18n.language)?.flag}
                </span>
                <span className="d-none d-md-inline">{t("navbar.language")}</span>
              </button>

              {showLangMenu && (
                <div
                  className="position-absolute bg-white shadow rounded p-2 mt-2"
                  style={{
                    right: 0,
                    minWidth: "160px",
                    zIndex: 1050,
                  }}
                >
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      style={{
                        padding: "8px 12px",
                        cursor: "pointer",
                        borderRadius: "4px",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                      onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <span style={{ fontSize: "18px" }}>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
