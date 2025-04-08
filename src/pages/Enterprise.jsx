import React, { useEffect, useState } from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faShieldAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import '../index.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Enterprise = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = "/";
  };

  const enterpriseFeatures = [
    { title: "Advanced Analytics", desc: "Gain valuable insights with real-time data analytics." },
    { title: "Enhanced Security", desc: "Multi-factor authentication, IP whitelisting, and more." },
    { title: "Priority Support", desc: "Get 24/7 live chat support and direct communication." },
  ];

  const steps = [
    { icon: faChartLine, title: "Advanced Analytics", desc: "Gain valuable insights with real-time data analytics." },
    { icon: faShieldAlt, title: "Enhanced Security", desc: "Multi-factor authentication, IP whitelisting, and more." },
    { icon: faPhoneVolume, title: "Priority Support", desc: "Get 24/7 live chat support and direct communication." }
  ];

  return (
    <section className="enterprise-page">

      {/* =============================== Navbar ============================== */}
      <Navbar expand="lg" className="Navbar shadow-md" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/DekuSMS-Blue.png"
              height="25"
              className="d-inline-block align-top me-2"
              alt="DekuSMS Logo"
            />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="gap-3 align-items-center">
              <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link as={Link} to="#usecases" className="nav-link-custom">Use Cases</Nav.Link>
              <Nav.Link as={Link} to="#pricing" className="nav-link-custom">Pricing</Nav.Link>
              <Nav.Link as={Link} to="/support" className="nav-link-custom">Support</Nav.Link>
              <Nav.Link as="span">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black px-2 hover:text-blue-600 transition"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>
              </Nav.Link>

              {/* Auth Buttons */}
              {user ? (
                <>
                  <span className="text-dark fw-bold">Hi, {user.name}</span>
                  <button onClick={handleLogout} className="btn btn-outline-dark btn-sm">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline-primary btn-sm">Sign In</Link>
                  <Link to="/signup" className="btn btn-primary btn-sm">Sign Up</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 🌟 ================ Hero Section =============== */}
      <div className="hero-content">
        <h1 className="hero-title">DekuSMS Enterprise</h1>
        <p className="hero-desc">
          Unlock the full potential of SMS with our premium, enterprise-grade features. Powerful messaging solutions tailored for businesses. Seamless Messaging with DekuSMS. Fast, secure, and reliable messaging for your business.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn">Request a Demo</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

      {/* 🌟 ================== Steps Section ==================== */}
      <div className="step-section" id="steps">
        <h1 className="step-title">DekuSMS Enterprise Features</h1>
        <div className="steps-cards">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={step.icon} />
              </div>
              <div className="step-text-container">
                <div className="step-text-title">{step.title}</div>
                <div className="step-text-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 ================ Features Section =============== */}
      <div className="features-section" id="features">
        <h2 className="features-title">Why DekuSMS Enterprise?</h2>
        <div className="feature-cards">
          {enterpriseFeatures.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="text-container">
                <div className="feature-span">{feature.title}</div>
                <div className="desc">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====================== Pricing Section ========================== */}
      <div className="pricing-section">
      <div className="pricing-content">
        <span className="pricing-span">Pricing and Plans</span>
        <h2 className="pricing-title">About DekuSMS</h2>
        <Link to="/pricing" className="pricing-link">View Plans</Link>

        <p className="pricing-description">
          <strong>DekuSMS</strong> is a next-generation SMS solution designed for privacy, security, and seamless integration.
        </p>
        <p className="pricing-description">
          Whether you need encrypted messaging, real-time cloud synchronization, or customizable settings, DekuSMS is built to empower you. Say goodbye to outdated SMS limitations and hello to the future of messaging.
        </p>
        
        <a href="#" className="pricing-readmore">Read More</a>
      </div>
    </div>

      {/* ============= ⚡ Footer ================== */}
      <footer className="footer">
        <p>© 2025 DekuSMS. All rights reserved.</p>
        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </section>
  );
};

export default Enterprise;
