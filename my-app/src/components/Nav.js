import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./styles/nav.css";

function Nav() {
  // State for the hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when clicking on a link
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  // Using translation from json file in locales folder
  const { t } = useTranslation();

  // removing the # from the URL when clicking on a link
  useEffect(() => {
    const handleClick = (event) => {
        const target = event.target;
        if (target.tagName === "A" && target.hash) {
            event.preventDefault();
            const section = document.querySelector(target.hash);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                window.history.replaceState(null, null, " "); // Remove # from URL
            }
        }
    };

    document.addEventListener("click", handleClick);

    return () => {
        document.removeEventListener("click", handleClick);
    };
}, []);

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

