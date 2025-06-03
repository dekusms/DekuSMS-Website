import React from "react";
import "../Style/Loader.css";

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <h1 className="loader-title">DekuSMS</h1>
      <div className="loader-spinner"></div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default Loading;
