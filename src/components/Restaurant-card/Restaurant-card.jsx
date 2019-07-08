import React from "react";
import { Link } from "react-router-dom";
import "./restaurant-card.css";

export default function RestaurantsCard(props) {
  return (
    <li className="restaurant-card">
      <Link to="/restaurant">
        <img
          className="restaurant-card__image-wrapper"
          src={props.imageUrl}
          alt="image of food restaurant"
        />
        <div className="restaurant-card__description">
          <h2 className="restaurant-card__name">{props.title}</h2>
          <span className="restaurant-card__average-price">
            {props.priceBucket} •{" "}
            {props.categories
              .map(category => {
                return category.keyName;
              })
              .join(" • ")}
          </span>
          <h4 className="restaurant-card__cooking-time">
            {props.etaRange.min} - {props.etaRange.max} Min
          </h4>
        </div>
      </Link>
    </li>
  );
}
