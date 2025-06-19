import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Link } from "react-router-dom";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "fa", label: "فارسی", flag: "🇮🇷" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "de", label: "Nederlands", flag: "🇳🇱" },
];

const Navigation = () => {
  const { t } = useTranslation("dekusms");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langRef = useRef(null);
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setShowLangMenu(false);
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "https://blog.smswithoutborders.com", label: t("navbar.blog"), external: true },
    { href: "https://docs.smswithoutborders.com", label: t("navbar.documentation"), external: true },
    { href: "https://opencollective.com/dekusms", label: t("navbar.support"), external: true },
    { to: "/download", label: t("navbar.download"), external: false },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar-glassmorphism ${scrolled ? "navbar-scrolled" : ""}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
            <img
              src="/logo/DekuSMS-Dark Theme.png"
              alt="DekuSMS Logo"
              className="navbar-logo"
              loading="lazy"
            />
          </Link>

          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded={isMenuOpen}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>

          <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
            <ul className="navbar-links">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="nav-link"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="nav-link"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}

              <li>
                <a
                  href="https://github.com/dekusms/DekuSMS-Android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link icon-link"
                  onClick={() => setMenuOpen(false)}
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </li>

              <li className="language-selector" ref={langRef}>
                <button
                  className="lang-button"
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  aria-haspopup="true"
                  aria-expanded={showLangMenu}
                >
                  <FontAwesomeIcon icon={faGlobe} />
                  <span className="lang-flag">
                    {languages.find((l) => l.code === i18n.language)?.flag}
                  </span>
                  <span className="lang-label">{t("navbar.language")}</span>
                </button>
                {showLangMenu && (
                  <ul className="lang-dropdown" role="menu">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        className="lang-option"
                        onClick={() => changeLanguage(lang.code)}
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            changeLanguage(lang.code);
                          }
                        }}
                      >
                        <span className="lang-flag">{lang.flag}</span>
                        <span className="lang-label">{lang.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="navbar-overlay"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <style jsx="true">{`
          * {
            box-sizing: border-box;
          }
          a {
            text-decoration: none;
          }

          .navbar-glassmorphism {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1100;
            backdrop-filter: blur(10px);
            background: rgba(15, 32, 39, 0.5);
            border-bottom: 1px solid rgba(255 255 255 / 0.1);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            font-family: 'Unbounded', 'Mona Sans', sans-serif;
          }

          .navbar-scrolled {
            background: rgba(15, 32, 39, 0.85);
            box-shadow: 0 2px 10px rgba(46, 211, 183, 0.3);
          }

          .navbar-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0.5rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .navbar-brand {
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .navbar-brand:hover {
            transform: scale(1.07);
          }
          .navbar-logo {
            height: 26px;
            user-select: none;
          }

          .navbar-burger {
            display: none;
            background: none;
            border: none;
            color:rgb(25, 218, 185);
            cursor: pointer;
            transition: color 0.3s ease;
          }
          .navbar-burger:hover {
            color:rgb(150, 235, 232);
          }

          .navbar-menu {
            display: flex;
            align-items: center;
          }

          .navbar-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 2rem;
          }
          .navbar-links li {
            position: relative;
          }

          .nav-link {
            font-weight: 600;
            font-size: 1rem;
            color: #ffffffdd;
            padding: 8px 0;
            position: relative;
            transition: color 0.3s ease;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            left: 0;
            bottom: -3px;
            background: #2ed3b7;
            transition: width 0.3s ease;
            border-radius: 2px;
          }
          .nav-link:hover,
          .nav-link:focus {
            color: #2ed3b7;
            outline: none;
          }
          .nav-link:hover::after,
          .nav-link:focus::after {
            width: 100%;
          }

          .icon-link {
            font-size: 1.25rem;
          }
          .icon-link:hover {
            color: #00fff7;
          }

          .language-selector {
            position: relative;
          }
          .lang-button {
            background: transparent;
            border: 1.5px solid #2ed3b7;
            color: #2ed3b7;
            padding: 6px 12px;
            font-weight: 600;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          .lang-button:hover,
          .lang-button:focus {
            background: #2ed3b7;
            color: #0f2027;
            outline: none;
          }
          .lang-flag {
            font-size: 18px;
          }
          .lang-label {
            font-size: 0.9rem;
            user-select: none;
          }

          .lang-dropdown {
            position: absolute;
            top: calc(100% + 6px);
            right: 0;
            background: #0f2027;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            width: 180px;
            overflow: hidden;
            z-index: 1200;
            animation: dropdownFadeIn 0.25s ease forwards;
          }
          @keyframes dropdownFadeIn {
            from {
              opacity: 0;
              transform: translateY(-5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .lang-option {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 14px;
            font-size: 1rem;
            color: #c5f5eb;
            cursor: pointer;
            user-select: none;
            transition: background-color 0.2s ease;
          }
          .lang-option:hover,
          .lang-option:focus {
            background-color: #2ed3b7;
            outline: none;
          }

          @media (max-width: 991px) {
            .navbar-burger {
              display: block;
            }
          .navbar-menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 70vh;
  width: 200px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: rgba(15, 32, 39, 0.95);
  backdrop-filter: blur(15px);
  flex-direction: column;
  padding: 3rem 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  box-shadow: -2px 0 10px rgba(46, 211, 183, 0.3);
  z-index: 1200;
}
            .navbar-menu.is-active {
              transform: translateX(0);
            }
            .navbar-links {
              flex-direction: column;
              gap: 1.6rem;
            }
            .language-selector {
              margin-top: auto;
            }
          }

          .navbar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.25);
            z-index: 1100;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navigation;
