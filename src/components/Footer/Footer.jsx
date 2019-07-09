import React from "react";
import "./Footer.css";
import footerLogo from "./img/white-logo.svg";
import { Container } from "../Container/Container.jsx";

export default function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <div className="footer__logo-wrapper">
          <img className="footer__logo" src={footerLogo} alt="Logo" />
        </div>
      </Container>
    </footer>
  );
}
