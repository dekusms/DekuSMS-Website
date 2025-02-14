import React from 'react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-5 bg-gradient text-light">
      <div className="container text-center">
        <h2 className="display-3 font-weight-bold mb-4">Get DekuSMS</h2>
        <p className="lead mb-5">
          Join thousands of users and download DekuSMS today! Available on your favorite platforms.
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.dekusms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-lg btn-outline-light w-100 shadow-lg p-3">
                <i className="fab fa-google-play mr-2"></i> Google Play
              </button>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <a
              href="https://f-droid.org/packages/com.dekusms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-lg btn-outline-light w-100 shadow-lg p-3">
                <i className="fab fa-android mr-2"></i> F-Droid
              </button>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <a href="https://example.com/dekusms.apk" download>
              <button className="btn btn-lg btn-outline-light w-100 shadow-lg p-3">
                <i className="fas fa-download mr-2"></i> Download APK
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
