import React from "react";
import "./authorization-options.css";
import basket from "../../img/basket.svg";

export default function AuthorOptions() {
  return (
    <div className="authorization-options header-authorization__wrapper">
      <form className="authorization-form" action="#">
        <input
          className="authorization-button authorization-button__wrapper"
          type="submit"
          value="Sign In"
        />
      </form>
      <form className="authorization-form" action="#">
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
