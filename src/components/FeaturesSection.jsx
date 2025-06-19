import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../index.css";

const FeaturesSection = () => {
  const { t, i18n } = useTranslation("dekusms");
  const isRTL = ["fa", "ar"].includes(i18n.language);

  const feature = [
    {
      image: "CloudForwarding.png",
      title: t("landing.feature.feature3Title"),
      desc: t("landing.feature.feature3Desc"),
    },
    {
      image: "CloudForwarding.png",
      title: t("landing.feature.feature4Title"),
      desc: t("landing.feature.feature4Desc"),
    },
    {
      image: "e2ee.png",
      title: t("landing.feature.feature1Title"),
      desc: t("landing.feature.feature1Desc"),
    },
    {
      image: "UX.png",
      title: t("landing.feature.feature2Title"),
      desc: t("landing.feature.feature2Desc"),
    },
  ];

  return (
    <section className="features-section" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">{t("landing.featuresTitle")}</h2>
          <p className="text-light fs-5">{t("landing.featuresIntro")}</p>
        </div>

        <div className="timeline">
          {feature.map((feature, index) => {
            const isEven = index % 2 === 0;
            const alignmentClass = isEven === !isRTL ? "left" : "right";
            return (
              <div key={index} className={`timeline-item ${alignmentClass}`}>
                <div className={`content-box feature-bg-${(index % 4) + 1}`}>
                  <div className="icon">
                    <img
                      src={feature.image}
                      alt={`Feature icon: ${feature.title}`}
                      className="card-icon"
                    />
                  </div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <style jsx>{`
        .features-section {
          background: linear-gradient(15deg, #203a43, rgb(47, 56, 55), #203a43);
          box-shadow: 0 8px 24px rgba(26, 39, 49, 0.5);
          color: white;
          padding: 50px 0;
          overflow-x: hidden;
        }

        .card-icon {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        .feature-bg-1 {
          background-color: #26272b;
        }

        .feature-bg-2 {
          background-color: rgb(63, 68, 71);
        }

        .feature-bg-3 {
          background-color: rgb(41, 43, 49);
          color: rgb(236, 243, 248);
        }

        .feature-bg-4 {
          background-color: rgb(63, 68, 71);
        }

        .timeline {
          position: relative;
          margin-top: 40px;
          padding: 0 5px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 60px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          background-color: rgb(64, 177, 171);
          z-index: 1;
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px 40px;
          box-sizing: border-box;
          z-index: 2;
        }

        .timeline-item.left {
          left: 0;
          display: flex;
          justify-content: flex-start;
        }

        .timeline-item.right {
          left: 50%;
          display: flex;
          justify-content: flex-end;
        }

        .content-box {
          border-radius: 1rem;
          padding: 30px;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          text-align: start;
        }

        [dir="rtl"] .content-box {
          text-align: right;
        }

        [dir="ltr"] .content-box {
          text-align: left;
        }

        .content-box h5 {
          font-size: clamp(1rem, 2vw, 1.5rem);
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .content-box p {
          font-size: clamp(0.9rem, 1.6vw, 1.1rem);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .timeline-item.left .content-box::after,
        .timeline-item.right .content-box::after {
          content: "";
          position: absolute;
          top: 30px;
          width: 12px;
          height: 12px;
          background: rgb(64, 177, 171);
          border-radius: 50%;
          z-index: 3;
        }

        .timeline-item.left .content-box::after {
          right: -46px;
        }

        .timeline-item.right .content-box::after {
          left: -46px;
        }

        .icon {
          margin-bottom: 10px;
        }

        [dir="rtl"] .timeline::before {
          left: auto;
          right: 50%;
          transform: translateX(50%);
        }

        [dir="rtl"] .timeline-item.left {
          left: auto;
          right: 0;
          justify-content: flex-end;
        }

        [dir="rtl"] .timeline-item.right {
          left: auto;
          right: 50%;
          justify-content: flex-start;
        }

        [dir="rtl"] .timeline-item.left .content-box::after {
          left: -46px;
          right: auto;
        }

        [dir="rtl"] .timeline-item.right .content-box::after {
          right: -46px;
          left: auto;
        }

        @media (max-width: 768px) {
          .timeline::before {
            display: none;
          }

          .timeline-item,
          .timeline-item.left,
          .timeline-item.right {
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            margin-bottom: 40px;
            display: block;
            justify-content: center !important;
            padding: 0;
          }

          .timeline-item .content-box {
            margin: 0 auto;
            max-width: 90%;
            padding: 20px;
            text-align: start;
          }

          [dir="rtl"] .timeline-item .content-box {
            text-align: right;
          }

          .timeline-item .content-box::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
