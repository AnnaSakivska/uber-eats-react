import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import MainPage from './MainPage/MainPage.js';
import RestaurantPage from "./Restaurant/Restaurant.js";


export function App() {
    return (
        <>
            <Router>
                <Header/>

                <Route path="/"
                       exact
                       component={MainPage}/>
                <Route path="/restaurant"
                       component={RestaurantPage}/>
                <Footer/>
            </Router>
        </>
    )
}

export default App;
