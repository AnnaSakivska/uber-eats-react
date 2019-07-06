import React from "react";
import "../../App.css";
import RestaurantLabel from "./restaurant-label/Restaurant-label.jsx";
import RestaurantMenu from "./restaurant-menu/Restaurant-menu.jsx";
import RestaurantNav from "./restaurant-nav/Restaurant-nav.jsx";

export function RestaurantPage() {
  return (
    <main className="restaurant-page">
      <section className="restaurant-header">
        <RestaurantLabel />
      </section>
      <RestaurantNav />
      <RestaurantMenu />
    </main>
  );
}

export default RestaurantPage;
