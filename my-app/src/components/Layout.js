import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import FloatingLanguageSwitcher from "./FloatingLanguageSwitcher";
import { useLocation, Outlet } from "react-router-dom";
import "./styles/layout.css";

function Layout() {
  const location = useLocation();

  // Removing the skip to main from the project pages
  const isProjectPage = location.pathname.startsWith("/project");

  return (
    <>
      {/* Skip to main content link */}
      {!isProjectPage && (
        <a className="skip-main" href="#main-content" tabIndex="0">
          Skip to main content
        </a>
      )}

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
