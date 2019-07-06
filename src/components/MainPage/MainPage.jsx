import React from "react";
import "./MainPage.css";
import RestaurantsSearch from "../restaurants-search/Restaurant-search.jsx";
import RestaurantsCard from "../restaurant-card/Restaurant-card.jsx";
import { restaurants } from "../Restaurant/Restaurants-information.jsx";

export default function MainPage() {
  const title2 = "Kyiv Restaurants";
  return (
    <div className="main-page">
      <RestaurantsSearch />
      <section className="main-page__section">
        <h2 className="main-page__title">{title2}</h2>
        <ul className="main-page-cards">
          {restaurants.map((restaurant, i) => {
            return (
              <RestaurantsCard
                key={i}
                title={restaurant.title}
                categories={restaurant.categories}
                priceBucket={restaurant.priceBucket}
                etaRange={restaurant.etaRange}
                imageUrl={restaurant.imageUrl}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}
