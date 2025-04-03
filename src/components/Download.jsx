import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faGithub, faAndroid } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Download = () => {
  return (
    <section id="download" className="download-section">
      <div className="download-container">
        {/* Left Side - Title & Description */}
        <div className="download-text">
          <h2 className="download-title">Download DekuSMS</h2>
          <p className="download-subtitle">
            Secure, private, and open-source messaging at your fingertips. Get DekuSMS today on your favorite platform.
          </p>
        </div>

        {/* Right Side - Download Options */}
        <div className="download-grid">
          <a href="https://play.google.com/store/apps/details?id=com.dekusms" target="_blank" rel="noopener noreferrer" className="download-card google-play">
            <FontAwesomeIcon icon={faGooglePlay} className="download-icon" />
            <div>
              <h3>Google Play</h3>
              <p>Download from Play Store</p>
            </div>
          </a>

          <a href="https://f-droid.org/packages/com.dekusms" target="_blank" rel="noopener noreferrer" className="download-card fdroid">
            <FontAwesomeIcon icon={faAndroid} className="download-icon" />
            <div>
              <h3>F-Droid</h3>
              <p>Get the open-source version</p>
            </div>
          </a>

          <a href="https://github.com/dekusms" target="_blank" rel="noopener noreferrer" className="download-card github">
            <FontAwesomeIcon icon={faGithub} className="download-icon" />
            <div>
              <h3>GitHub</h3>
              <p>View source & contribute</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
