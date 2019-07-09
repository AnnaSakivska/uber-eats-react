import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";

export function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={MainPage} />
        <Route path="/restaurant" component={RestaurantPage} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
