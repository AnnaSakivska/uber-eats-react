import React from 'react';
import RestaurantLabel from "./restaurant-label/restaurant-label.js";
import RestaurantMenu from "./restaurant-menu/restaurant-menu.js";
import RestaurantNav from './restaurant-nav/restaurant-nav.js';


export default function Main() {
    return (
        <main className="restaurant-main">
            <RestaurantLabel />
            <RestaurantNav />
            <RestaurantMenu />
        </main>
);
}