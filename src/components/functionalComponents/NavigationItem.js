import {NavLink} from "react-router-dom";
import React from "react";


export function NavigationItem({clickHandler, path, title, children}) {

    return (
        <li className="nav-item"
            onClick={clickHandler}
        >
            <NavLink
                className="link link-hamburger"
                to={path}

            >
                {children}
                <h5>{title}</h5>
            </NavLink>
        </li>
    );
}