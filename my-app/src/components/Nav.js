import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";
import "./styles/nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  // Using translation from json file in locales folder
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <div className="logo">
        <h1>Sebastian</h1>
        <p>{t("nav.title")}</p>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#top" onClick={handleMenuItemClick}>{t("nav.home")}</a>
          </li>
          <li>
            <a href="#projects" onClick={handleMenuItemClick}>{t("nav.projects")}</a>
          </li>
          <li>
            <a href="#about" onClick={handleMenuItemClick}>{t("nav.about")}</a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuItemClick}>{t("nav.contact")}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
