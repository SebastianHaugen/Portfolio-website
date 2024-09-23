import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "./styles/nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <div className="logo">
        <h1>Sebastian</h1>
        <p>Webutvikler</p>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#top" onClick={handleMenuItemClick}>Hjem</a>
          </li>
          <li>
            <a href="#projects" onClick={handleMenuItemClick}>Prosjekter</a>
          </li>
          <li>
            <a href="#about" onClick={handleMenuItemClick}>Om</a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuItemClick}>Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
