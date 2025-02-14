import React from 'react';
import '../App.css';

const DownloadDeku = () => {
  return (
    <section id="download-deku" className="deku-download-section">
      <div className="deku-download-text">
        <div className="deku-download-text__tagline">Stay Connected with Deku SMS</div>
        <br />
        <div className="deku-download-text__cta">Download the App</div>
      </div>

      <div className="deku-download-links">
        <div className="deku-download-buttons">
          <a
            className="deku-download-button deku-download-playstore"
            href="https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"    
              alt="Get it on Google Play"
              className="deku-download__play-store"
              width="200"
              height="auto"
            />
          </a>

          <a
            className="deku-download-button deku-download-fdroid"
            href="https://itunes.apple.com/us/app/bbc-news/id364147881?mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" 
              alt="Get it on F-Droid" 
              className="deku-download__fdroid"
              width="200"
              height="auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadDeku;
