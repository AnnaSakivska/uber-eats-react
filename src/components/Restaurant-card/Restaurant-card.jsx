import React from "react";
import { Link } from "react-router-dom";
import "./Restaurant-card.css";

export default function RestaurantsCard(props) {
  return (
    <li className="Restaurant-card">
      <Link to="/restaurant">
        <img
          className="Restaurant-card__image"
          src={props.imageUrl}
          alt="image of food restaurant"
        />
        <div className="Restaurant-card__description">
          <h2 className="Restaurant-card__name">{props.title}</h2>
          <span className="Restaurant-card__average-price">
            {props.priceBucket} •{" "}
            {props.categories
              .map(category => {
                return category.keyName;
              })
              .join(" • ")}
          </span>
          <h4 className="Restaurant-card__cooking-time">
            {props.etaRange.min} - {props.etaRange.max} Min
          </h4>
        </div>
      </Link>
    </li>
  );
}
