import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import RestaurantPage from "./components/Restaurant/Restaurant";

export function App() {
  return (
    <>
      <Router>
        <Header />

        <Route path="/" exact component={MainPage} />
        <Route path="/restaurant" component={RestaurantPage} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
