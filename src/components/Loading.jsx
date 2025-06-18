import React from "react";

const Loading = () => {
  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .loader-title {
            font-size: 5rem !important;
          }
          .loader-spinner {
            width: 40px !important;
            height: 40px !important;
            border-width: 4px !important;
            margin-bottom: 10px !important;
          }
          .loader-text {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 400px) {
          .loader-title {
            font-size: 3rem !important;
          }
          .loader-spinner {
            width: 30px !important;
            height: 30px !important;
            border-width: 3px !important;
            margin-bottom: 8px !important;
          }
          .loader-text {
            font-size: 0.9rem !important;
          }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #0f2027, #203a43, #0f2027)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          className="loader-title"
          style={{
            fontSize: "10rem",
            fontWeight: 700,
            marginBottom: 20,
            fontFamily: "'Russo One', sans-serif",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
          }}
        >
          DekuSMS
        </h1>
        <div
          className="loader-spinner"
          style={{
            width: 60,
            height: 60,
            border: "6px solid rgba(255, 255, 255, 0.2)",
            borderTop: "6px solid white",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: 15,
          }}
        />
        <p className="loader-text" style={{ fontSize: "1.2rem", color: "#ccc" }}>
          Loading...
        </p>
      </div>
    </>
  );
};

export default Loading;
