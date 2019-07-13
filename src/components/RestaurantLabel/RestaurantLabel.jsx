import React from "react";
import "./RestaurantLabel.css";
import { Container } from "../Container/Container.jsx";
import { restaurantMenuInform } from "../restaurantMenuInform/restaurantMenuInform.jsx";

export default function RestaurantLabel() {
  const backgroundImage = `url(${restaurantMenuInform.largeImageUrl})`;
  return (
    <div
      className="restaurant-label__wrapper"
      style={{
        background: backgroundImage,
        backgroundPosition: `left center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
      }}
    >
      <Container>
        <div className="Restaurant-label">
          <h2 className="restaurant-label__name">
            {restaurantMenuInform.title}
          </h2>
          <div className="restaurant-label__information">
            <h3 className="restaurant-label__description">
              {" "}
              {restaurantMenuInform.priceBucket}{" "}
              {restaurantMenuInform.categories.map(category => {
                return ` • ${category.name}`;
              })}{" "}
            </h3>
            <span className="restaurant-label__delivery">
              {restaurantMenuInform.etaRange.min}-{" "}
              {restaurantMenuInform.etaRange.max} Min
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
