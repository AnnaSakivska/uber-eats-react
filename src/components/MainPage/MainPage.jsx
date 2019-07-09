import React from "react";
import "./MainPage.css";
import RestaurantsSearch from "../Search/Search.jsx";
import RestaurantsCard from "../RestaurantCard/RestaurantCard.jsx";
import { restaurants } from "../restaurants/restaurants.jsx";
import { Container } from "../Container/Container.jsx";

export default function MainPage() {
  return (
    <Container>
      <div className="Main-page">
        <RestaurantsSearch />
        <section className="main-page__section">
          <h2 className="main-page__title">Kyiv Restaurants</h2>
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
    </Container>
  );
}
