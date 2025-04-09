import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faShieldAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const Enterprise = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/enterprise');
  };


  const enterpriseFeatures = [
    { title: "Advanced Analytics", desc: "Gain valuable insights with real-time data analytics.", span: "Offers" },
    { title: "Enhanced Security", desc: "Multi-factor authentication, IP whitelisting, and more.", span: "and" },
    { title: "Priority Support", desc: "Get 24/7 live chat support and direct communication.", span: "Including"  },
  ];

  const steps = [
    { icon: faChartLine, title: "Advanced Analytics", desc: "Gain valuable insights with real-time data analytics." },
    { icon: faShieldAlt, title: "Enhanced Security", desc: "Multi-factor authentication, IP whitelisting, and more." },
    { icon: faPhoneVolume, title: "Priority Support", desc: "Get 24/7 live chat support and direct communication." }
  ];

  return (
    <section className="enterprise-page">
  {/* ============================ Navbar ========================== */}
  <Navbar expand="lg" className="custom-navbar" fixed="top" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/DekuSMS-Blue.png" alt="DekuSMS Logo" height="30" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
          <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
<Nav.Link href="#features" className="nav-link-custom">Features</Nav.Link>

<Nav.Link href="#pricing" className="nav-link-custom">Pricing</Nav.Link>
<Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>


            {!isLoggedIn ? (
              <>
                <Button as={Link} to="/login" variant="outline-primary" size="sm" className="mx-2">
                  Login
                </Button>
                <Button as={Link} to="/signup" variant="primary" size="sm">
                  Sign Up
                </Button>
              </>
            ) : (
              <NavDropdown
                align="end"
                title={
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="rounded-circle"
                    width="30"
                    height="30"
                  />
                }
                id="user-dropdown"
              >
                <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/settings">Account Settings</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/billing">Billing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      {/*========================== Hero Section ===========================*/}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">DekuSMS Enterprise</h1>
        <p className="hero-desc">
          Unlock the full potential of SMS with our premium, enterprise-grade features. Powerful messaging solutions tailored for businesses. Seamless Messaging with DekuSMS. Fast, secure, and reliable messaging for your business.
        </p>

          <div className="hero-buttons">
            <button className="hero-btn-primary">Request a Demo</button>
            <button className="hero-btn-secondary">Learn More</button>
            
          </div>
        </div>
      </section>


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
          <div className="feature-span">{feature.span}</div>
          <div className="feature-image-title">{feature.title}</div>
          <div className="desc">{feature.desc}</div>
        </div>
      </div>
    ))}
  </div>

  <div className="features-image-text-section">
    <div className="feature-row">
      <div className="feature-column image-column">
        <img src="/Dashboard.png" alt="Feature" className="feature-img" />
      </div>

      <div className="feature-column text-column">
        <div className="text-container">
          <div className="feature-image-span">some span</div>
          <div className="feature-image-title">Powerful Messaging</div>
          <div className="desc">
            Powerful messaging solutions tailored for businesses. Seamless Messaging with DekuSMS. 
            Fast, secure, and reliable messaging for your business. 
            Powerful messaging solutions tailored for businesses. Seamless Messaging with DekuSMS. 
            Fast, secure, and reliable messaging for your business.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* ===========------------=========== Pricing Section ===============----------=========== */}
<div className="pricing-section" id="pricing">
  <div className="pricing-content">
    <span className="pricing-span">Pricing and Plans</span>
    <h2 className="pricing-title">About DekuSMS</h2>

    <p className="pricing-description">
      <strong>DekuSMS</strong> is a next-generation SMS solution designed for privacy, security, and seamless integration.
    </p>
    <p className="pricing-description">
      Whether you need encrypted messaging, real-time cloud synchronization, or customizable settings, DekuSMS is built to empower you. Say goodbye to outdated SMS limitations and hello to the future of messaging.
    </p>

    <a href="#" className="pricing-readmore">Read More</a>
  </div>

  {/* -================= Pricing Cards ==================-- */}
  <section className="enterprise-page" id="pricing">
    <div className="pricing2-section">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <div className="pricing-cards">
        {[
          { plan: "Basic", price: "$99/month", features: ["Up to 5000 messages/month", "Email support", "Access to basic features"] },
          { plan: "Premium", price: "$199/month", features: ["Up to 15,000 messages/month", "Priority support", "Advanced analytics and reporting"] },
          { plan: "Enterprise", price: "$499/month", features: ["Unlimited messages/month", "Dedicated account manager", "API access, Multi-device sync"] }
        ].map((plan, index) => (
          <div className="pricing-card" key={index}>
            <div className="plan">{plan.plan}</div>
            <div className="price">{plan.price}</div>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="cta-btn">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>


    {/* ================== contect ================================== */}
<section className="contact-support" id="contact">
  <div className="contact-container">
    <h2>Contact and Support</h2>
    <p className="contact-description">
      Find out what <strong>DekuSMS</strong> can do for you by talking to our support team. We're here to help you stay connected, securely and reliably.
    </p>
    <ul className="contact-links">
      <li><a href="mailto:support@dekusms.com">📧 Send us an Email</a></li>
      <li><a href="/support-center">🛠 Contact our Support Center</a></li>
      <li><a href="/community">💬 Join our Community</a></li>
      <li><a href="https://github.com/dekusms">📂 View our Repos</a></li>
      <li><a href="https://bsky.app/profile/dekusms">🌐 Follow us on Bluesky</a></li>
    </ul>
  </div>
</section>




{/* ============= ⚡Footer ================== */}
<footer className="footer">
  <div className="footer-container">
    {/* Brand & Description */}
    <div className="footer-brand">
      <h3>DekuSMS</h3>
      <p>
        DekuSMS is a secure and private messaging platform offering offline-to-online SMS bridging. Stay connected anywhere, anytime.
      </p>
    </div>

    {/* Quick Links */}
    <div className="footer-links-group">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#download">Download</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>Email: <a href="mailto:support@dekusms.com">support@dekusms.com</a></p>
      <p>Phone: +1 (800) 123-4567</p>
      <div className="footer-socials">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>
    </div>
  </div>

  {/* Bottom Strip */}
  <div className="footer-bottom">
    <p>© 2025 DekuSMS. All rights reserved.</p>
    <div className="footer-policy-links">
      <a href="#privacy">Privacy Policy</a>
      <a href="#terms">Terms of Service</a>
    </div>
  </div>
</footer>


    </section>
  );
};

export default Enterprise;
