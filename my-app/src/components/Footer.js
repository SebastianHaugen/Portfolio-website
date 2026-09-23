import React from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./styles/footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sebastian Skrøvseth Haugen</p>
      <button
        className="footer-top-link"
        aria-label={t("footer.top")}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} aria-hidden="true" />
        <span>{t("footer.top")}</span>
      </button>
    </footer>
  );
}

export default Footer;
