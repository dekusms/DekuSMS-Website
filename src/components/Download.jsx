import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

const Download = () => {
  const { t, i18n } = useTranslation("dekusms");
  const isRTL = i18n.dir() === "rtl";

  const downloadOptions = [
    {
      href: "https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share",
      img: "/playstore.webp",
      alt: "Google Play Store",
      title: t("download.googlePlay.title"),
      desc: t("download.googlePlay.desc"),
      bg: "#e9f8f0",
    },
    {
      href: "https://f-droid.org/docs/Reproducible_Builds/",
      img: "/fdroid.png",
      alt: "F-Droid",
      title: t("download.fdroid.title"),
      desc: t("download.fdroid.desc"),
      bg: "#ecf2fd",
    },
    {
      href: "https://github.com/dekusms/DekuSMS-Android?tab=readme-ov-file",
      img: "/github.png",
      alt: "GitHub",
      title: t("download.github.title"),
      desc: t("download.github.desc"),
      bg: "#f4f4f4",
    },
  ];

  return (
    <section
    id="download"
    dir={i18n.dir()}
    className="download-section"
  >
    <div className="container text-center">
      <h2 className="fw-bold mb-3 display-6 download-title">{t("download.title")}</h2>
      <p className="text-muted mb-5">{t("download.subtitle")}</p>
  
      <div className="row justify-content-center g-4">
        {downloadOptions.map((opt, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <a
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`download-card d-flex ${
                isRTL ? "flex-row-reverse text-end" : "text-start"
              } align-items-center h-100 shadow-sm`}
              style={{
                background: opt.bg,
                borderRadius: "1.5rem",
                padding: "1.5rem",
                gap: "1rem",
                height: "100%",
                textDecoration: "none",
                color: "#111",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <img
                src={opt.img}
                alt={opt.alt}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                  borderRadius: "12px",
                  flexShrink: 0,
                }}
              />
              <div className="flex-grow-1">
                <h5 className="fw-semibold mb-1">{opt.title}</h5>
                <p className="text-muted small mb-0">{opt.desc}</p>
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
