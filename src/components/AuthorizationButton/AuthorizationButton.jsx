import React from "react";
import "./AuthorizationButton.css";

export function AuthorizationButton() {
  return (
    <>
      <input className="Authorization-button" type="submit" value="Sign In" />
      <input
        className="Authorization-button authorization-button_black"
        type="submit"
        value="Register"
      />
    </>
  );
}
