import React from "react";
import "./footer.css";
import footerLogo from "../img/white-logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-wrapper">
        <img className="logo" src={footerLogo} alt="Logo" />
      </div>
    </footer>
  );
}
