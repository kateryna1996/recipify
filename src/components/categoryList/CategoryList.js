import React from 'react';
import { useNavigate } from "react-router-dom";

import "./CategoryList.css"


function CategoryList() {

    const mealTypes = [
        "main course", "side dish", " dessert", "salad", "soup", "beverage"
    ]

    let navigate = useNavigate();


    return (
        <section className="category">
            <ul className="category-list">
                {mealTypes.map((type) => {
                    return <li key={type}
                               className="li-category"
                    >
                        <button
                            className="category-item"
                            onClick={() => navigate(`../category/${type}`)}
                            type="button">
                            {type}
                        </button>
                    </li>
                })}
            </ul>
        </section>
    );
}

export default CategoryList;