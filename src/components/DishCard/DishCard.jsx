import React from "react";
import "./DishCard.css";
import { restaurantMenuInform } from "../restaurantMenuInform/restaurantMenuInform";

export function DishCard(props) {
  const {
    title,
    itemDescription,
    price,
    imageUrl
  } = restaurantMenuInform.items[props.id];

  return (
    <div className="Dish-card">
      <div className="dish-card__description">
        <span className="dish-card__title">{title}</span>
        <span className="dish-card__ingredients">{itemDescription}</span>
        <span className="dish-card__price">{price / 100}₽</span>
      </div>
      <div className="dish-card__picture-wrapper">
        {imageUrl !== undefined && (
          <img className="dish-card__picture"
               src={imageUrl}
               alt="Dish" />
        )}
      </div>
    </div>
  );
}
