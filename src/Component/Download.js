import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

const DownloadSection = () => {
  const { t } = useTranslation();

  return (
    <section id="download" className="py-5 bg-gradient text-light">
      <div className="container text-center">
        <h2 className="display-3 font-weight-bold mb-4">{t("downloadTitle")}</h2>
        <p className="lead mb-5">{t("downloadDescription")}</p>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.dekusms"
              target="_blank"
              rel="noopener noreferrer"
              className="download-link"
            >
              <img
                src="/playstore.png"
                alt={t("downloadPlaystore")}
                className="img-fluid download-img"
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <a
              href="https://f-droid.org/packages/com.dekusms"
              target="_blank"
              rel="noopener noreferrer"
              className="download-link"
            >
              <img
                src="/fdriod.png"
                alt={t("downloadFdroid")}
                className="img-fluid download-img"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
