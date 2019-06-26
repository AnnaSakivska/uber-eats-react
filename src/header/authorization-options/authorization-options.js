import React from 'react';
import './authorization-options.css';

export default function AuthorOptions(){
    return (
        <div className="authorization-options header-authorization__wrapper">
            <form className="authorization-form" action="#">
                <input className="authorization-button" type="submit" value="Sign In"/>
            </form>
            <form className="authorization-form" action="#">
                <input className="authorization-button authorization-button_black" type="submit"
                       value="Register"/>
            </form>
        </div>
    )
}


