import React from 'react';
import { useNavigate } from "react-router-dom";

function CategoryList() {

    const mealTypes = [
        "main course", "side dish"," dessert", "salad", "soup", "beverage"
    ]
    let navigate = useNavigate();
    //.replace(/^\s+|\s+$/g, "")

    return (
        <div>
            <ul>
                {mealTypes.map((type) => {
                    return <li key={type}>
                       <button
                           onClick={() => navigate(`../category/${type}`)}
                           type="button">
                           {type}
                       </button>
                    </li>
                } )}
            </ul>
        </div>
    );
};

export default CategoryList;