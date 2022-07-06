import React from 'react';

import LargeNavigation from "./largeSNavigation/LargeNavigation";
import MobileNavigation from "./mobile/MobileNavigation";

import "./Navigation.css";
import {IoRestaurantOutline} from "react-icons/io5";
import {NavigationItem} from "../../functionalComponents/NavigationItem";


function Navigation() {
    return (
        <div className="navbar">
            <NavigationItem
                path="/"
                className="link"
            >
                <h2 className="inline">
                    Recipify
                </h2>
                <IoRestaurantOutline/>
            </NavigationItem>

            <LargeNavigation/>
            <MobileNavigation/>
        </div>
    );
}

export default Navigation;