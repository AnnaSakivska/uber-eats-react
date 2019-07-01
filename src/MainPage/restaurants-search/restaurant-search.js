import React from "react";
import "./restaurants-search.css";

export default function RestaurantsSearch() {
  return (
    <div className="restaurants-search__wrapper">
      <div className="restaurants-search__container">
        <label className="restaurants-search">
          <input
            className="restaurants-search__input"
            type="text"
            placeholder="Search for restaurant or cuisine"
          />
        </label>
      </div>
    </div>
  );
}
