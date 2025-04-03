import React from 'react';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Enterprise = () => {
  const enterpriseFeatures = [
    { icon: faChartLine, title: "Advanced Analytics", desc: "Gain valuable insights with real-time data analytics." },
    { icon: faShieldAlt, title: "Enhanced Security", desc: "Multi-factor authentication, IP whitelisting, and more." },
    { icon: faPhoneVolume, title: "Priority Support", desc: "Get 24/7 live chat support and direct communication." },
    { icon: faShieldAlt, title: "Dedicated Account Manager", desc: "Receive personalized service with a dedicated manager." },
    { icon: faChartLine, title: "API Access", desc: "Integrate with your systems for seamless messaging." },
    { icon: faPhoneVolume, title: "Multiple Device Sync", desc: "Sync messages across multiple devices for teams." },
  ];

  const steps = [
    { icon: faChartLine, title: "Advanced Analytics", desc: "Gain valuable insights with real-time data analytics." },
    { icon: faShieldAlt, title: "Enhanced Security", desc: "Multi-factor authentication, IP whitelisting, and more." },
    { icon: faPhoneVolume, title: "Priority Support", desc: "Get 24/7 live chat support and direct communication." }
  ];

  return (
    <section className="enterprise-page">
      {/* 🌟 Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/DekuSMS-White.png" alt="DekuSMS Logo" className="navbar-logo" />
          </Link>
          {/* Hamburger Toggle Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download" onClick={() => setIsOpen(false)}>Download</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download" onClick={() => setIsOpen(false)}>Products</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support" onClick={() => setIsOpen(false)}>Community</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download" onClick={() => setIsOpen(false)}>Use Cases</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/docs" onClick={() => setIsOpen(false)}>Documentation</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🌟 Hero Section */}
      <div className="hero-content">
        <h1 className="hero-title">DekuSMS Enterprise</h1>
        <p className="hero-desc">Unlock the full potential of SMS with our premium, enterprise-grade features.</p>
        <div className="hero-buttons">
          <button className="hero-btn">Request a Demo</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
      

      {/* 🌟 Steps Section */}
      <div className="step-section" id="steps">
        <span>steps</span>
        <h1 className="step-title">DekuSMS Enterprise</h1>
        <div className="steps-cards">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={step.icon} />
              </div>
              <div className="text-container">
                <div className="title">{step.title}</div>
                <div className="desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 Features Section */}
      <div className="features-section" id="features">
        <h2 className="features-title">Key Features</h2>
        <div className="feature-cards">
          {enterpriseFeatures.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={feature.icon} />
              </div>
              <div className="text-container">
                <div className="title">{feature.title}</div>
                <div className="desc">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💰 Pricing Section */}
      <div className="pricing-section" id="pricing">
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
                {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
              <button className="cta-btn">Get Started</button>
            </div>
          ))}
        </div>
      </div>

      {/* ⚡ Footer */}
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
