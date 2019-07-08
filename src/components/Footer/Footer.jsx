import React from "react";
import "./footer.css";
import footerLogo from "./img/white-logo.svg";
import { Container } from "../Container/Container.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__logo-wrapper">
          <img className="logo" src={footerLogo} alt="Logo" />
        </div>
      </Container>
    </footer>
  );
}
