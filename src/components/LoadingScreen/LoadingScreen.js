import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Wait for fade-out animation
    }, 2500); // Show loading for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${!isLoading ? "fade-out" : ""}`}>
      <div className="loading-content">
        <div className="logo-animation">
          <span className="logo-bracket animate-left">{"<"}</span>
          <span className="logo-text">Yehan Dinuka</span>
          <span className="logo-bracket animate-right">{"/>"}</span>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
