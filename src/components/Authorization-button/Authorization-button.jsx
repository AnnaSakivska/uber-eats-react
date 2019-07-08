import React from "react";
import "./Authorization-button.css";


export function AuthorizationButton() {
    return (
        <>
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
        </>
    );
}
