import React from "react";
import "./restaurant-label.css";

export default function RestaurantLabel() {
  return (
    <div className="restaurant-label__wrapper">
      <div className="restaurant-label">
        <h2 className="restaurant-label__name">Трактир «Пушкин»</h2>
        <div className="restaurant-label__information">
          <h3 className="restaurant-label__description">₽₽₽ • Европейская</h3>
          <span className="restaurant-label__delivery">40 - 50 Min</span>
        </div>
      </div>
    </div>
  );
}
