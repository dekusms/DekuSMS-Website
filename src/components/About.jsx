import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faCloud, faLock } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const About = () => {
  const features = [
    { icon: faShieldAlt, title: "End-to-End Encryption", desc: "Secure SMS messaging with complete privacy protection." },
    { icon: faCloud, title: "Cloud Forwarding", desc: "Sync messages to your personal cloud server." },
    { icon: faLock, title: "Use as SMS Gateway", desc: "Send SMS via your Android phone with ease." },
    { icon: faShieldAlt, title: "Open Source & Community-Driven", desc: "Built by the community for complete transparency and control." },
  ];

  return (
    <section className="about-page">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-description">
          <h2 className="section-title">About DekuSMS</h2>
          <p className="about-description">
            <strong>DekuSMS</strong> is a next-generation SMS solution designed for privacy, security, and seamless integration.
            We believe in giving users full control over their communication without compromise.
          </p>
          <p className="about-description">
            Whether you need encrypted messaging, real-time cloud synchronization, or customizable settings, 
            DekuSMS is built to empower you. Say goodbye to outdated SMS limitations and hello to the future of messaging.
          </p>
        </div>

        <div className="about-content">
          {/* Features Section */}
          <div className="about-features">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <FontAwesomeIcon className="feature-icon" icon={feature.icon} />
                <div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <button className="about-btn">Learn More</button>
        </div>

        {/* Left: Image */}
        <div className="about-image">
          <img src="landing 2.png" alt="DekuSMS Security" />
        </div>
      </div>
    </section>
  );
};

export default About;
