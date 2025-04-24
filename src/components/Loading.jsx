import React from "react";

const Loading = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div
        className="spinner-border text-primary mb-3"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p style={{ fontSize: "1.1rem", color: "#444" }}>Loading content...</p>
    </div>
  );
};

export default Loading;
