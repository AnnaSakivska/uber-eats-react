import React from "react";
import "../../App.css";
import RestaurantLabel from "../RestaurantLabel/RestaurantLabel.jsx";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu.jsx";
import RestaurantNav from "../RestaurantNav/RestaurantNav.jsx";

export function RestaurantPage() {
  return (
    <main className="Restaurant-page">
      <section className="restaurant-page__header">
        <RestaurantLabel />
      </section>
      <RestaurantNav />
      <RestaurantMenu />
    </main>
  );
}

export default RestaurantPage;
