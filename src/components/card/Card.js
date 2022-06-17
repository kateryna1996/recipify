import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

function Card({ title, calories, image, id }) {

    const [recipeID, setRecipeID] = useState(0);

    function handleClick(id) {
        setRecipeID(id);
        console.log(recipeID);
    }

    return (
        <div>
            <h2>{title}</h2>
            <h3>{calories} </h3>
            {image &&
            <img src={image}
                 alt={title}
                 />
            }

            {/*<button*/}
            {/*    className="more-recipe-button"*/}
            {/*    onClick={() => handleRecipeClick(id)}*/}
            {/*>*/}
            {/*    <NavLink to={`/recipes/${recipeID}`}>*/}
            {/*        SHOW MORE*/}
            {/*        {recipeID > 0 ? <SingleRecipe recipeID={recipeID} /> : ""}*/}
            {/*    </NavLink>*/}
            {/*</button>*/}
        </div>
    );
};

export default Card;