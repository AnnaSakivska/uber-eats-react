import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from './header/header.js';
import RestaurantsSearch from './MainPage/restaurants-search/restaurant-search.js';
import Footer from './footer/footer.js';
import MainPage from './MainPage/MainPage.js';
import RestaurantPage from "./Restaurant/Restaurant.js";


export function App() {
    return (
        <>
            <Router>
                <Header/>
                <MainPage />
                <Footer/>

                <Route path="/" exact component={MainPage}/>
                <Route path="/restaurant" exact component={RestaurantPage}/>
            </Router>
        </>
            )
}

export default App;
