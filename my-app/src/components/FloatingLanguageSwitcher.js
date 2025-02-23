// src/components/FloatingLanguageSwitcher.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NO, GB } from "country-flag-icons/react/3x2"; 

const FloatingLanguageSwitcher = () => {
  // Get the i18n instance from the hook
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  // Change between Norwegian and English
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "no" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <button
        onClick={toggleLanguage}
        style={{
          padding: "10px",
          border: "none",
          backgroundColor: "#232b32",
          color: "white",
          cursor: "pointer",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        {language === "en" ? <NO style={{ width: "40px", height: "40px" }} /> : <GB style={{ width: "40px", height: "40px" }} />}
      </button>
    </div>
  );
};

export default FloatingLanguageSwitcher;
