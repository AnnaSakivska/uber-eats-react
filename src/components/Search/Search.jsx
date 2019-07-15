import React from "react";
import "./Search.css";

export default function Search(props) {
  function onInputHandler(event) {
      props.updateSearch(event.target.value);
  }

    return (
    <div className="search__container">
      <label className="Search">
        <input
          className="search__input"
          type="text"
          placeholder="Search for restaurant or cuisine"
          onInput={onInputHandler}
        />
      </label>
    </div>
  );
}
