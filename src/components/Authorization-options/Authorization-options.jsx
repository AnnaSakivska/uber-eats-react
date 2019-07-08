import React from "react";
import "./authorization-options.css";
import basket from "./img/basket.svg";

export default function AuthorizationOptions() {
  return (
    <div className="authorization-options">
      <form className="authorization-form" action="#">
        <input
          className="authorization-button authorization-button__wrapper"
          type="submit"
          value="Sign In"
        />
        <input
          className="authorization-button authorization-button__wrapper authorization-button_black"
          type="submit"
          value="Register"
        />
      </form>
      <a className="authorization-options__buying-link">
        <img
          className="authorization-options__buying-logo"
          src={basket}
          alt=""
        />
      </a>
    </div>
  );
}
