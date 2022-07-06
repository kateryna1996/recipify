import React from 'react';
import {Link} from "react-router-dom";

export function RecipeNavigationItem({path, title}) {
    return (
        <li className="recipe-navigation-item">
            <Link to={path}
                  className="link-recipe"
            >
                {title}
            </Link>
        </li>
    );
}