import React from "react";
import "./RestaurantMenu.css";
import {restaurantMenuInform} from "../restaurantMenuInform/restaurantMenuInform.jsx";
import {DishCard} from "../DishCard/DishCard.jsx";


export default function restaurantMenu() {
    return (
        <section className="Restaurant-menu">
            <div className="restaurant-menu__container">
                {restaurantMenuInform.sections.map((section, i) => {
                        return (
                            <div key={section.uuid}>
                                <span className={"restaurant-menu__title"} id={`${section.title}`}>
                                    {section.title}
                                </span>
                                <div className={"restaurant-menu__list"}>
                                    {section.itemUuids.map((item, i) => {
                                            return (
                                                <div className="restaurant-menu__dish">
                                                    <DishCard
                                                        id={item}
                                                        key={item}/>
                                                </div>
                                            )
                                        }
                                    )}

                                </div>
                            </div>
                        )
                    }
                )}

            </div>
        </section>
    );
}
