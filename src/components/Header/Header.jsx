import React from "react";
import "./Header.css";
import logo from "./img/logo.svg";
import DeliveryTerms from "../Delivery-terms/Delivery-terms.jsx";
import AuthorizationOptions from "../AuthorizationOptions/AuthorizationOptions.jsx";
import { Link } from "react-router-dom";
import { Container } from "../Container/Container";

export default function Header() {
  return (
    <header className="Header">
      <Container>
        <div className="Header__inner-wrapper">
          <div className="Header__logo-wrapper">
            <Link to="/">
              <img className="Header__logo" src={logo} alt="Logo" />
            </Link>
          </div>
          <DeliveryTerms />
          <AuthorizationOptions />
        </div>
      </Container>
    </header>
  );
}
