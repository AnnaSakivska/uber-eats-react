import React from 'react';
import './header.css';
import logo from '../img/logo.svg';
import basket from '../img/basket.svg';
import DeliveryTerms from './delivery-terms/delivery-terms.js';
import AuthorOptions from './authorization-options/authorization-options.js';
import { Link } from "react-router-dom";


export default function Header() {
    return (
            <header className="header">
                <div className="header__inner-wrapper">
                    <div className="header__logo-wrapper">
                        <Link to="/">
                        <img className="logo" src={logo} alt="Logo"/>
                        </Link>
                    </div>
                    <DeliveryTerms/>
                    <AuthorOptions/>
                    <a className="header__buying-link">
                        <img className="header__buying-logo" src={basket} alt=""/>
                    </a>
                </div>
            </header>
    );
}

