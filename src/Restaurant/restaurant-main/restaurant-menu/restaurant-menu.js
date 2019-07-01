import React from "react";
import "./restaurant-menu.css";
import dishPicture from "D:/mate_academy/uber-eats-react/src/img/dish-picture.png";

export default function restaurantMenu() {
  return (
    <section className="restaurant-menu">
      <div className="restaurant-menu__container">
        <h3 className="restaurant-menu__title">Закуски</h3>
        <ul className="restaurant-menu__list">
          <li className="restaurant-menu__dish dish-card">
            <div className="restaurant-menu__dish-description">
              <h3 className="restaurant-menu__dish-title">
                Сельдь на бородинском хлебе
              </h3>
              <span className="restaurant-menu__dish-ingredients">
                С яйцом и огурцом
              </span>
              <span className="restaurant-menu__dish-price">240 ₽</span>
            </div>
            <div className="restaurant-menu__dish-picture">
              <img
                className="restaurant-menu__picture"
                src={dishPicture}
                alt="Dish picture"
              />
            </div>
          </li>
          <li className="restaurant-menu__dish dish-card">
            <div className="restaurant-menu__dish-description">
              <h3 className="restaurant-menu__dish-title">
                Сельдь на бородинском хлебе
              </h3>
              <span className="restaurant-menu__dish-ingredients">
                С яйцом и огурцом
              </span>
              <span className="restaurant-menu__dish-price">240 ₽</span>
            </div>
            <div className="restaurant-menu__dish-picture">
              <img
                className="restaurant-menu__picture"
                src={dishPicture}
                alt="Dish picture"
              />
            </div>
          </li>
          <li className="restaurant-menu__dish dish-card">
            <div className="restaurant-menu__dish-description">
              <h3 className="restaurant-menu__dish-title">
                Сельдь на бородинском хлебе
              </h3>
              <span className="restaurant-menu__dish-ingredients">
                С яйцом и огурцом
              </span>
              <span className="restaurant-menu__dish-price">240 ₽</span>
            </div>
            <div className="restaurant-menu__dish-picture">
              <img
                className="restaurant-menu__picture"
                src={dishPicture}
                alt="Dish picture"
              />
            </div>
          </li>
          <li className="restaurant-menu__dish dish-card">
            <div className="restaurant-menu__dish-description">
              <h3 className="restaurant-menu__dish-title">
                Сельдь на бородинском хлебе
              </h3>
              <span className="restaurant-menu__dish-ingredients">
                С яйцом и огурцом
              </span>
              <span className="restaurant-menu__dish-price">240 ₽</span>
            </div>
            <div className="restaurant-menu__dish-picture">
              <img
                className="restaurant-menu__picture"
                src={dishPicture}
                alt="Dish picture"
              />
            </div>
          </li>
          <li className="restaurant-menu__dish dish-card">
            <div className="restaurant-menu__dish-description">
              <h3 className="restaurant-menu__dish-title">
                Сельдь на бородинском хлебе
              </h3>
              <span className="restaurant-menu__dish-ingredients">
                С яйцом и огурцом
              </span>
              <span className="restaurant-menu__dish-price">240 ₽</span>
            </div>
            <div className="restaurant-menu__dish-picture">
              <img
                className="restaurant-menu__picture"
                src={dishPicture}
                alt="Dish picture"
              />
            </div>
          </li>
          <li className="restaurant-menu__dish dish-card">
            <div className="restaurant-menu__dish-description">
              <h3 className="restaurant-menu__dish-title">
                Сельдь на бородинском хлебе
              </h3>
              <span className="restaurant-menu__dish-ingredients">
                С яйцом и огурцом
              </span>
              <span className="restaurant-menu__dish-price">240 ₽</span>
            </div>
            <div className="restaurant-menu__dish-picture">
              <img
                className="restaurant-menu__picture"
                src={dishPicture}
                alt="Dish picture"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
