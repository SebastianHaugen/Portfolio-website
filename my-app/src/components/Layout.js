import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./styles/layout.css";
import FloatingLanguageSwitcher from "./FloatingLanguageSwitcher";

function Layout() {
  return (
    <>
      {/* Skip to main content link */}
      <a className="skip-main" href="#projects" tabIndex="0">
        Skip to main content
      </a>

      <div className="layout-container">
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />

      <FloatingLanguageSwitcher />
    </>
  );
}

export default Layout;
