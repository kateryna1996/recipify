import React from 'react';
import {useEffect, useState} from "@types/react";
import axios from "axios";

function SearchRecipe() {

    const [recipeInfo, setRecipeInfo] = useState(null);
    const [ recipeId, setRecipeId ] = useState(0);

    useEffect( () => {
        async function getRecipeById(id) {
            try{
                //asking info about a specific id
                const response = await axios.get(`https://api.spoonacular.com/recipes?apiKey=${process.env.REACT_APP_API_KEY}&${id}/information`);
                console.log( response);
                setRecipeInfo(response);
            }catch(e){
                console.error(e);
            }
        }getRecipeById()
    }, [recipes])



    return (
        <div>

        </div>
    );
};

export default SearchRecipe;