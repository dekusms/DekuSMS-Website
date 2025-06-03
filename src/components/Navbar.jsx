import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import i18n from "../i18n";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
};

const hoverStyle = {
  color: "#d1d1ff",
};

const Navigation = () => {
  const { t } = useTranslation("dekusms");
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => setHovered(id);
  const handleMouseLeave = () => setHovered(null);

  return (
    <Navbar
    expand="lg"
    fixed="top"
    className="py-3"
    expanded={expanded}
    onToggle={() => setExpanded(!expanded)}
    style={{
      background: "#000824" ,
      boxShadow: "5px 5px 15px rgba(20, 37, 48, 0.97)",
      fontFamily: "'Unbounded', 'Mona Sans'"
        }}
  >  
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4" style={{ color: "white" }}>
          <img
            src="/DekuSMS-Dark Theme.png"
            alt="Logo"
            style={{ height: "22px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
  aria-controls="basic-navbar-nav"
  style={{
    borderColor: "#ffffff",
    backgroundColor: "transparent",
  }}
>
  <span
    className="navbar-toggler-icon"
    style={{
      filter: "invert(1)",
      WebkitFilter: "invert(1)",
    }}
  />
</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            {[
              { href: "https://blog.smswithoutborders.com", label: t("navbar.blog") || "Blog", external: true },
              { href: "https://docs.smswithoutborders.com", label: t("navbar.documentation") || "Documentation", external: true },
              // { href: "#offers", label: t("navbar.support") || "Support" },
              { to: "/download", label: t("navbar.download") || "Download" },
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
                  ...linkStyle,
                  ...(hovered === index ? hoverStyle : {}),
                }}
              >
                {item.label}
              </Nav.Link>
            ))}

            <Nav.Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setExpanded(false)}
              onMouseEnter={() => handleMouseEnter("github")}
              onMouseLeave={handleMouseLeave}
              style={{
                ...linkStyle,
                ...(hovered === "github" ? hoverStyle : {}),
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>

            <NavDropdown
              align="end"
              title={
                <>
                <FontAwesomeIcon icon={faGlobe} style={{ color: 'white' }} className="me-2" />
                  <span className="d-none d-md-inline" style={{ color: "white" }}>
                    {t("navbar.language") || "Language"}
                  </span>
                </>
              }
              id="language-dropdown"
              menuVariant="light"
            >
              {[
                { code: "en", label: "English" },
                { code: "fr", label: "Français" },
                { code: "es", label: "Español" },
                { code: "fa", label: "فارسی" },
                { code: "de", label: "Deutsch" },
                { code: "ar", label: "العربية" },
              ].map((lang) => (
                <NavDropdown.Item  key={lang.code} onClick={() => i18n.changeLanguage(lang.code)}>
                  {lang.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
