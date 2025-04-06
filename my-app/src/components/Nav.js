import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

function Nav() {
  // State for the hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  // Using translation from json file in locales folder
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  // Function to close the menu when clicking on a link
  const handleMenuItemClick = (targetId) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      // Wait for the homepage to load, then scroll
      setTimeout(() => {
        const section = document.querySelector(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
      <Link to="/" className="logo" aria-label={t("nav.home")}>
        <h1>Sebastian</h1>
        <p className="nav-title">{t("nav.title")}</p>
      </Link>

      <div className="hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          label={isOpen ? "Close menu" : "Open menu"}
        />
      </div>

      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <button
              onClick={() => handleMenuItemClick("#top")}
              aria-label={t("nav.home")}
            >
              {t("nav.home")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuItemClick("#main-content")}
              aria-label={t("nav.projects")}
            >
              {t("nav.projects")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuItemClick("#about")}
              aria-label={t("nav.about")}
            >
              {t("nav.about")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuItemClick("#contact")}
              aria-label={t("nav.contact")}
            >
              {t("nav.contact")}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
