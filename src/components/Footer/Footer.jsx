import React from "react";
import "./Footer.css";
import footerLogo from "./img/white-logo.svg";
import { Container } from "../Container/Container.jsx";

export default function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer__logo-wrapper">
          <img className="logo" src={footerLogo} alt="Logo" />
        </div>
      </Container>
    </footer>
  );
}
