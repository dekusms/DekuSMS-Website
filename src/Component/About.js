import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <div className="about-text">
          <h2 className="section-title">About DekuSMS</h2>
          <p className="about-text">
            <strong>DekuSMS</strong> is an open-source Android SMS application designed for <strong>secure messaging, SMS image transmission, and SMS-Cloud communications</strong>.
          </p>
          <p className="about-text">
            Unlike traditional SMS apps, DekuSMS allows users to configure their own cloud servers, giving full control over their data and privacy. The app is built for users who value <strong>security, encryption, and flexibility</strong>.
          </p>
        </div>

        <h3 className="section-subtitle">Key Features</h3>
        <div className="features-grid">
          <div className="features-column">
            {[
              { title: "End-to-End Encryption", desc: "Secure SMS messaging with complete privacy protection." },
              { title: "Cloud Forwarding", desc: "Sync messages to your personal cloud server." },
              { title: "Use as SMS Gateway", desc: "Send SMS via your Android phone with ease." },
              { title: "Open Source & Community-Driven", desc: "Built by the community for complete transparency and control." },
            ].map((feature, index) => (
              <div className="features-card" key={index}>
                <FontAwesomeIcon className="icon" icon={faAnglesRight} />
                <div>
                  <h3 className="title">{feature.title}</h3>
                  <p className="text">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="features-column image-container col-md-6 d-flex justify-content-center align-items-center">
            <img src="ss.png" alt="Features Banner" className="banner-animation" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
