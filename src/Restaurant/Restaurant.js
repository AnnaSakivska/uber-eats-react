import React from 'react';
import '../App.css';
import Header from '../header/header.js';
import Main from './restaurant-main/restaurant-main.js';
import Footer from '../footer/footer.js';


export function RestaurantPage() {

    return (
        <> <Header />
            <Main />
            <Footer />
        </>
    )
}

export default RestaurantPage;
