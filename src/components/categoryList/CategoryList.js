import React from 'react';

function CategoryList() {

    const mealTypes = [
        "main course", "side dish"," dessert", "salad", "soup", "beverage"
    ]



    return (
        <div>
            <ul>
                {mealTypes.map((type) => {
                    return <li key={type}>
                        <button
                            type="button"

                        >{type}</button>
                    </li>
                } )}
            </ul>
        </div>
    );
};

export default CategoryList;