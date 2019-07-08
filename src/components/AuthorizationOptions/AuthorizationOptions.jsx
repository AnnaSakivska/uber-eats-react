import React from "react";
import "./AuthorizationOptions.css";
import basket from "./img/basket.svg";
import { AuthorizationButton } from "../AuthorizationButton/AuthorizationButton.jsx";

export default function AuthorizationOptions() {
  return (
    <div className="Authorization-options">
      <form className="Authorization-option__form" action="#">
        <AuthorizationButton />
      </form>
      <a className="Authorization-options__buying-link">
        <img
          className="Authorization-options__buying-logo"
          src={basket}
          alt=""
        />
      </a>
    </div>
  );
}
