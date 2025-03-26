import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./styles/layout.css";

function Layout() {
  return (
    <>
      <div className="layout-container">
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
