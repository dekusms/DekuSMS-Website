import React from "react";
import "../Style/Loader.css";

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-spinner"></div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default Loading;
