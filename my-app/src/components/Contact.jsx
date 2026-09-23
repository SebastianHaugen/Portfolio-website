import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-container" id="contact">
      <h2 className="section-title">{t("contact.header")}</h2>
      <p className="contact-description">{t("contact.short")}</p>
      <a className="contact-email" href="mailto:sebastian@haug1.net">
        sebastian@haug1.net
      </a>
      <ul className="contact-links">
        <li>
          <a href="https://www.linkedin.com/in/sebastian-skr%C3%B8vseth-haugen/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/SebastianHaugen" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
