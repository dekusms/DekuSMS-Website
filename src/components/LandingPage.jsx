import React from 'react';
import "../App.css";

const LandingPage = () => {
  return (
    <>   
      {/* Landing Section */}
      <section className="landing">
        <div className="landing-content">
          <h1>DekuSMS <br /> Stay Connected, Anytime</h1>
          <p>Empower your communication with end-to-end encryption and complete cloud integration. Stay connected, securely.</p>
          <div className="landing-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="landing-image">
          <img src="/landing 2.png" alt="DekuSMS Preview" />
        </div>
      </section>

      {/* Gratitude Section with White Card */}
      <section className="gratitude">
        <div className="gratitude-card">
          <h1>Secure, Smart, and Unstoppable</h1>
          <p>
            DekuSMS isn’t just an SMS app—it’s a game-changer. Built for privacy and power, 
            it delivers end-to-end encryption, SMS-to-cloud forwarding, and full control over your messages. 
            Say goodbye to limitations and hello to secure, customizable, and intelligent messaging. 
            Your privacy. Your rules. Your SMS, evolved. 🚀
          </p>      
        </div>
      </section>
    </>
  );
};

export default LandingPage;
