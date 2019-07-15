import React from "react";
import "./MainPage.css";
import Search from "../Search/Search.jsx";
import RestaurantsCard from "../RestaurantCard/RestaurantCard.jsx";
import { restaurants } from "../restaurants/restaurants.jsx";
import { Container } from "../Container/Container.jsx";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    };
  }

  updateSearchValue = searchValue => {
    this.setState({
      searchValue: searchValue
    });
  };

  render() {
    return (
      <Container>
        <div className="Main-page">
          <Search updateSearch={this.updateSearchValue} />
          <section className="main-page__section">
            <h2 className="main-page__title">Kyiv Restaurants</h2>
            <ul className="main-page-cards">
              {restaurants
                .filter(restaurant =>
                  restaurant.title
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase())
                )
                .map((restaurant, i) => {
                  return (
                    <RestaurantsCard
                      key={i}
                      title={restaurant.title}
                      categories={restaurant.categories}
                      priceBucket={restaurant.priceBucket}
                      etaRange={restaurant.etaRange}
                      imageUrl={restaurant.imageUrl}
                      searchValue={this.state.searchValue}
                    />
                  );
                })}
            </ul>
          </section>
        </div>
      </Container>
    );
  }
}
