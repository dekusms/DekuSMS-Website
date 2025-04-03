import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faCloud, faLock } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const About = () => {
  const features = [
    { icon: faShieldAlt, title: "Advanced Security", desc: "Your messages are protected with end-to-end encryption, ensuring privacy and security at all times." },
    { icon: faCloud, title: "Cloud Sync", desc: "Seamlessly sync your SMS messages across devices with our encrypted cloud integration." },
    { icon: faLock, title: "Total Control", desc: "Take full control over your messaging experience with custom settings and privacy-first features." },
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
