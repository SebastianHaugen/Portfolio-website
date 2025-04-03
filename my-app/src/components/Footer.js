import React from "react";
import { ArrowUp } from "lucide-react";
import github from "../assets/img/github-mark.png";
import linkedin from "../assets/img/linkedin-circle.png";
import "./styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Scroll to top button */}
      <div className="footer-top">
        <button
          className="footer-top-link"
          tabIndex="0"
          aria-label="Til toppen"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={24} color="#d2042d" />
        </button>
      </div>

      {/* Social links */}
      <div className="footer-links">
        <a
          href="https://github.com/SebastianHaugen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sebastian-skr%C3%B8vseth-haugen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="footer-icon" />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Sebastian Haugen. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
