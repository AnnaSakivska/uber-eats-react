import React from "react";
import "./RestaurantNav.css";
import { Container } from "../Container/Container";

export default function RestaurantNav() {
  return (
    <>
      <Container>
        <ul className="Restaurant-nav">
          <li className="restaurant-nav__option">
            <a className="restaurant-nav__option-link" href="#">
              Закуски
            </a>
          </li>
          <li className="restaurant-nav__option">
            <a className="restaurant-nav__option-link" href="#">
              Салаты
            </a>
          </li>
          <li className="restaurant-nav__option">
            <a className="restaurant-nav__option-link" href="#">
              Супы
            </a>
          </li>
          <li className="restaurant-nav__option">
            <a className="restaurant-nav__option-link" href="#">
              Горячие блюда
            </a>
          </li>
          <li className="restaurant-nav__option">
            <a className="restaurant-nav__option-link" href="#">
              Гарниры
            </a>
          </li>
          <li className="restaurant-nav__option">
            <a className="restaurant-nav__option-link" href="#">
              Десерты
            </a>
          </li>
        </ul>
      </Container>
      <hr className="restaurant-nav__bottom-line" />
    </>
  );
}
