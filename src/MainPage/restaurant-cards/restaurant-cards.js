import React from 'react';
import {Link} from "react-router-dom";
import './restaurant-cards.css';

export default function RestaurantsCards() {
    return (
        <section className="restaurant-cards__section">
            <h2 className="restaurant-cards__title">Kyiv Restaurants</h2>
            <ul className="restaurant-cards">
                <li className="restaurant-option">
                    <Link to="/restaurant">
                        <div className="restaurant-option__image-wrapper"/>
                        <div className="restaurant-option__description restaurant-option_grey-background">
                            <h2 className="restaurant-option__name">Макдоналдс</h2>
                            <h3 className="restaurant-option__average-price">₴₴ • Бургеры</h3>
                            <h4 className="restaurant-option__cooking-time">25 - 35 Min</h4>
                        </div>
                    </Link>
                </li>
                <li className="restaurant-option">
                    <div className="restaurant-option__image-wrapper"/>
                    <div className="restaurant-option__description">
                        <h2 className="restaurant-option__name">Макдоналдс</h2>
                        <h3 className="restaurant-option__average-price">₴₴ • Бургеры</h3>
                        <h4 className="restaurant-option__cooking-time">25 - 35 Min</h4>
                    </div>
                </li>
                <li className="restaurant-option">
                    <div className="restaurant-option__image-wrapper"/>
                    <div className="restaurant-option__description">
                        <h2 className="restaurant-option__name">Макдоналдс</h2>
                        <h3 className="restaurant-option__average-price">₴₴ • Бургеры</h3>
                        <h4 className="restaurant-option__cooking-time">25 - 35 Min</h4>
                    </div>
                </li>
                <li className="restaurant-option">
                    <div className="restaurant-option__image-wrapper"/>
                    <div className="restaurant-option__description">
                        <h2 className="restaurant-option__name">Макдоналдс</h2>
                        <h3 className="restaurant-option__average-price">₴₴ • Бургеры</h3>
                        <h4 className="restaurant-option__cooking-time">25 - 35 Min</h4>
                    </div>
                </li>
                <li className="restaurant-option">
                    <div className="restaurant-option__image-wrapper"/>
                    <div className="restaurant-option__description">
                        <h2 className="restaurant-option__name">Макдоналдс</h2>
                        <h3 className="restaurant-option__average-price">₴₴ • Бургеры</h3>
                        <h4 className="restaurant-option__cooking-time">25 - 35 Min</h4>
                    </div>
                </li>
                <li className="restaurant-option">
                    <div className="restaurant-option__image-wrapper"/>
                    <div className="restaurant-option__description">
                        <h2 className="restaurant-option__name">Макдоналдс</h2>
                        <h3 className="restaurant-option__average-price">₴₴ • Бургеры</h3>
                        <h4 className="restaurant-option__cooking-time">25 - 35 Min</h4>
                    </div>
                </li>
                <li className="restaurant-option">
                    <div className="restaurant-option__image-wrapper"/>
                    <div className="restaurant-option__description">
                        <h2 className="restaurant-option__name">Макдоналдс</h2>
                        <h3 className="restaurant-option__average-price">₴₴ • Бургеры</h3>
                        <h4 className="restaurant-option__cooking-time">25 - 35 Min</h4>
                    </div>
                </li>
                <li className="restaurant-option">
                    <div className="restaurant-option__image-wrapper"/>
                    <div className="restaurant-option__description">
                        <h2 className="restaurant-option__name">Макдоналдс</h2>
                        <h3 className="restaurant-option__average-price">₴₴ • Бургеры</h3>
                        <h4 className="restaurant-option__cooking-time">25 - 35 Min</h4>
                    </div>
                </li>
                <li className="restaurant-option">
                    <div className="restaurant-option__image-wrapper"/>
                    <div className="restaurant-option__description">
                        <h2 className="restaurant-option__name">Макдоналдс</h2>
                        <h3 className="restaurant-option__average-price">₴₴ • Бургеры</h3>
                        <h4 className="restaurant-option__cooking-time">25 - 35 Min</h4>
                    </div>
                </li>
            </ul>
        </section>
    )
}