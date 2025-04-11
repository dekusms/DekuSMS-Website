import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

const Download = () => {
  const { t } = useTranslation('dekusms');

  const downloadOptions = [
    {
      href: "https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share",
      img: "/playstore.webp",
      alt: "Google Play Store icon",
      title: t('download.googlePlay.title'),
      desc: t('download.googlePlay.desc'),
      iconColor: "#3bcc5e",
      border: "border-success",
    },
    {
      href: "https://f-droid.org/docs/Reproducible_Builds/",
      img: "/fdroid.png",
      alt: "F-Droid icon",
      title: t('download.fdroid.title'),
      desc: t('download.fdroid.desc'),
      iconColor: "#1976d2",
      border: "border-primary",
    },
    {
      href: "https://github.com/dekusms/DekuSMS-Android?tab=readme-ov-file",
      img: "/github.png",
      alt: "GitHub icon",
      title: t('download.github.title'),
      desc: t('download.github.desc'),
      iconColor: "#333",
      border: "border-dark",
    }
  ];

  return (
    <section
      id="download"
      className="py-5 bg-white text-center d-flex align-items-center justify-content-center"
      style={{ minHeight: '50vh' }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3" style={{ color: "#001871" }}>
          {t('download.title')}
        </h2>
        <p className="text-muted mb-5" style={{ color: "#001871" }}>{t('download.subtitle')}</p>

        <div className="row g-4 align-items-stretch">
          {downloadOptions.map((option, index) => (
            <div className="col-md-4" key={index}>
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`d-flex align-items-center text-start p-4 rounded-4 border ${option.border} shadow-sm text-decoration-none text-dark bg-light h-100 hover-lift`}
                style={{
                  gap: "15px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <img
                  src={option.img}
                  alt={option.alt}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h5 className="fw-bold mb-1">{option.title}</h5>
                  <p className="small text-muted mb-0">{option.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Download;
