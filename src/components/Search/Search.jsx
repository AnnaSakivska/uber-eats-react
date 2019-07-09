import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search__container">
      <label className="Search">
        <input
          className="search__input"
          type="text"
          placeholder="Search for restaurant or cuisine"
        />
      </label>
    </div>
  );
}
