import React from 'react';
import "../App.css";

const LandingPage = () => {
  return (
      <section className="landing">
        <div className="landing-content">
          <h1>DekuSMS <br /> Stay Connected, Anytime</h1>
          <p>Empower your communication with end-to-end encryption and complete cloud integration. Stay connected, securely.</p>
          <div className="landing-buttons">
            <button className="Hero-btn-primary">Get Started</button>
            <button className="Hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="landing-image">
          <img src="/landing 2.png" alt="DekuSMS Preview" />
        </div>
      </section>
  );
};

export default LandingPage;
