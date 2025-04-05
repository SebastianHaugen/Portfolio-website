// src/components/FloatingLanguageSwitcher.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NO, GB } from "country-flag-icons/react/3x2";

const FloatingLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

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
      }}
    >
      <button
        onClick={toggleLanguage}
        aria-label={
          language === "en"
            ? "Bytt språk til norsk"
            : "Switch language to English"
        }
        style={{
          padding: "10px",
          border: "2px solid transparent",
          backgroundColor: "#232b32",
          color: "white",
          cursor: "pointer",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          transition: "outline 0.2s ease-in-out",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleLanguage();
          }
        }}
      >
        {language === "en" ? (
          <NO
            style={{ width: "40px", height: "40px" }}
            title="Norwegian flag"
            role="img"
          />
        ) : (
          <GB
            style={{ width: "40px", height: "40px" }}
            title="British flag"
            role="img"
          />
        )}
      </button>
    </div>
  );
};

export default FloatingLanguageSwitcher;
