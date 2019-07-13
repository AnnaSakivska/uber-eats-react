import React from "react";
import "./RestaurantNav.css";
import { Container } from "../Container/Container";
import { restaurantMenuInform } from "../restaurantMenuInform/restaurantMenuInform.jsx";

export default function RestaurantNav() {
  return (
    <>
      <Container>
        <ul className="Restaurant-nav">
          {restaurantMenuInform.sections.map((section, i) => {
            return (
              <a
                className="restaurant-nav__option-link"
                href={`#${section.title}`}
                key={section.title}
              >
                <li className="restaurant-nav__option">{section.title}</li>
              </a>
            );
          })}

          {/*)}*/}

          {/*{restaurantMenu.sections.map((section, i) => {*/}
          {/*  return (*/}
          {/*      <a*/}
          {/*          href={`#${section.title}`}*/}
          {/*          className={"Proposition-type__link"}*/}
          {/*          key={section.title}*/}
          {/*      >*/}
          {/*        <li className="Proposition-type__item">{section.title}</li>*/}
          {/*      </a>*/}
        </ul>
      </Container>
      <hr className="restaurant-nav__bottom-line" />
    </>
  );
}
