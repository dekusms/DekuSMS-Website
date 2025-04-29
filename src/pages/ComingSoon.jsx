import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const ComingSoon = () => {
  const { t } = useTranslation("comingsoon");
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => setHovered(id);
  const handleMouseLeave = () => setHovered(null);

  const linkStyle = {
    color: "white",
    fontFamily: "'Mona Sans'",
    fontSize: "1rem",
    padding: "0.5rem 1rem"
  };

  const hoverStyle = {
    color: "#ffffff",
    textDecoration: "none",
    transform: "scale(1.05)",
    transition: "all 0.3s ease",
  };

  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-04-30T00:00:00");
    const difference = launchDate - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      background: 'radial-gradient(circle, #0024A8, #000158)',
      color: '#ffffff',
      fontFamily: "'Unbounded'",
      position: 'relative',
      overflow: 'hidden',
      padding: '20px',
    }}>
    
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        style={{
          backgroundColor: "#001871",
          boxShadow: "5px 5px 15px rgba(52, 84, 102, 0.97)",
          fontFamily: "'Unbounded', 'Mona Sans'",
        }}
      >  
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4" style={{ color: "white" }}>
            <img src="/DekuSMS-Dark Theme.png" alt="Logo" style={{ height: "22px" }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#ffffff", backgroundColor: "transparent" }}>
            <span className="navbar-toggler-icon" style={{ filter: "invert(1)", WebkitFilter: "invert(1)" }} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center gap-3">
              {[
                { to: "/", label: t("navbar.home") || "Home" },
                { to: "/enterprise", label:t("navbar.enterprise")|| "Enterprise" },
                { href: "https://blog.smswithoutborders.com", label: t("navbar.blog") || "Blog", external: true },
                { href: "https://docs.smswithoutborders.com", label: t("navbar.documentation") || "Documentation", external: true },
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
                href="https://github.com/dekusms"
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
                  <NavDropdown.Item key={lang.code} onClick={() => i18n.changeLanguage(lang.code)}>
                    {lang.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-20%',
        width: '150%',
        height: '150%',
        background: 'linear-gradient(45deg, #577BFF, #0031E0)',
        clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        animation: 'moveBackground 5s ease infinite',
        zIndex: -1
      }}></div>

      <div className="animated-bg" style={{
        padding: '100px 0',
        textAlign: 'center',
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
      }}>
        <h1 className="animated-text" style={{
          fontSize: 'clamp(2.5rem, 8vw, 8rem)',
          fontWeight: '900',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          background: 'linear-gradient(to right, #ffffff, #dcdcdc)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}>
          {t("comingSoon.title")}
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: '#D1D1D6' }}>
          {t("comingSoon.subtitle")}
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} style={{
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: 'rgba(109, 171, 216, 0.1)',
            boxShadow: '0 4px 20px rgba(71, 78, 83, 0.3)',
            textAlign: 'center',
            color: '#15B79E',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fff' }}>
              {String(value).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#A0A0AB', textTransform: 'uppercase' }}>
              {t(`countdown.${unit}`)}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        maxWidth: '700px',
        margin: '0 auto 30px auto',
        padding: '30px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}>
        <h3 style={{ color: 'white', fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
          {t("comingSoon.joinMailingList")}
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px',
          width: '100%',
        }}>
          <input
            type="email"
            placeholder={t("comingSoon.emailPlaceholder")}
            style={{
              flex: '1 1 60px',
              minWidth: '100px',
              padding: '14px 20px',
              borderRadius: '12px',
              border: 'none',
              outline: 'none',
              backgroundColor: 'white',
              color: '#010e3d',
            }}
          />
          <button style={{
            padding: '14px 25px',
            fontSize: '16px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: '#E66F00',
            color: 'white',
            cursor: 'pointer',
          }}>
            {t("comingSoon.notifyMeButton")}
          </button>
        </div>
      </div>

      <footer style={{
        marginTop: 'auto',
        width: '100%',
        color: '#A0AEC0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
        textAlign: 'center',
        padding: '20px',
      }}>
        <p style={{ margin: 0 }}>{t("footer.followUs")}</p>
        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
          <a href="https://twitter.com/dekusms" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Twitter</a>
          <a href="https://github.com/dekusms" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>GitHub</a>
        </div>
        <p style={{ marginTop: '10px' }}>© {new Date().getFullYear()} {t("footer.companyName")}</p>
      </footer>

      <style>{`
        @keyframes smoothAppear {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes moveBackground {
          0% { transform: translate(0%, 0%); }
          50% { transform: translate(2%, 2%); }
          100% { transform: translate(0%, 0%); }
        }
        .animated-text { animation: smoothAppear 1.8s ease-in-out forwards; }
        .animated-bg { animation: moveBackground 18s ease-in-out infinite; }
      `}</style>

    </div>
  );
};

export default ComingSoon;
