import React from 'react';
import './MainPage.css';
import RestaurantsSearch from './restaurants-search/restaurant-search';
import RestaurantsCards from './restaurant-cards/restaurant-card';
import {restaurants} from '../Restaurant/restaurants-information.js';

export default function MainPage() {
    return (
        <div className="main-page">
            <RestaurantsSearch/>
            <section className="main-page__section">
                <h2 className="main-page__title">Kyiv Restaurants</h2>
                <ul className="main-page-cards">
                    {restaurants.map((restaurant, i) => {
                            return (
                                <RestaurantsCards key={i}
                                                  title={restaurant.title}
                                                  categories={restaurant.categories}
                                                  priceBucket={restaurant.priceBucket}
                                                  etaRange={restaurant.etaRange}
                                                  imageUrl={restaurant.imageUrl}
                                />
                            )
                        }
                    )}
                </ul>
            </section>
        </div>
    )
}
