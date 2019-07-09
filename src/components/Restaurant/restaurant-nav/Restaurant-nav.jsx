import React from "react";
import "./restaurant-nav.css";

export default function RestaurantNav() {
  return (
    <ul className="Restaurant-nav">
      <li className="Restaurant-nav__option">
        <a className="Restaurant-nav__option-link" href="#">
          Закуски
        </a>
      </li>
      <li className="Restaurant-nav__option">
        <a className="Restaurant-nav__option-link" href="#">
          Салаты
        </a>
      </li>
      <li className="Restaurant-nav__option">
        <a className="Restaurant-nav__option-link" href="#">
          Супы
        </a>
      </li>
      <li className="Restaurant-nav__option">
        <a className="Restaurant-nav__option-link" href="#">
          Горячие блюда
        </a>
      </li>
      <li className="Restaurant-nav__option">
        <a className="Restaurant-nav__option-link" href="#">
          Гарниры
        </a>
      </li>
      <li className="restaurant-nav__option">
        <a className="restaurant-nav__option-link" href="#">
          Десерты
        </a>
      </li>
    </ul>
  );
}
