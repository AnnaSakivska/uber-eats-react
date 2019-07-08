import React from "react";
import "./header.css";
import logo from "./img/logo.svg";
import DeliveryTerms from "../delivery-terms/Delivery-terms.jsx";
import AuthorizationOptions from "../authorization-options/Authorization-options.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner-wrapper">
        <div className="header__logo-wrapper">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <DeliveryTerms />
        <AuthorizationOptions />
      </div>
    </header>
  );
}
