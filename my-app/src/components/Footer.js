import React from "react";
import github from "../assets/img/GitHub_Logo.png";
import linkedin from "../assets/img/LI-Logo.png";
import "./styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/SebastianHaugen" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/sebastian-skr%C3%B8vseth-haugen/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="footer-icon" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Sebastian Haugen. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

