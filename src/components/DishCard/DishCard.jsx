import React from "react";
import "./DishCard.css";
import { restaurantMenuInform } from "../restaurantMenuInform/restaurantMenuInform";

export function DishCard(props) {
  const image = restaurantMenuInform.items[props.id].imageUrl;

  return (
    <div className="Dish-card">
      <div className="dish-card__description">
        <span className="dish-card__title">
          {restaurantMenuInform.items[props.id].title}
        </span>
        <span className="dish-card__ingredients">
          {restaurantMenuInform.items[props.id].itemDescription}
        </span>
        <span className="dish-card__price">
          {restaurantMenuInform.items[props.id].price / 100}₽
        </span>
      </div>
      <div className="dish-card__picture-wrapper">
        {image && <img className="dish-card__picture" src={image} alt="Dish" />}
      </div>
    </div>
  );
}
