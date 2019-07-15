import React from "react";
import "./Header.css";
import logo from "./img/logo.svg";
import DeliveryTerms from "../DeliveryTerms/DeliveryTerms.jsx";
import AuthorizationOptions from "../AuthorizationOptions/AuthorizationOptions.jsx";
import { Container } from "../Container/Container";

export default function Header() {
  return (
    <header className="Header">
      <Container>
        <div className="header__inner-wrapper">
          <div className="header__logo-wrapper">
              <img className="header__logo" src={logo} alt="Logo" />
          </div>
          <DeliveryTerms />
          <AuthorizationOptions />
        </div>
      </Container>
    </header>
  );
}
