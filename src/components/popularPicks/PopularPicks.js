import React, {useEffect, useState} from 'react';
import axios from "axios";

import "./PopularPics.css";
import Card from "../card/Card";
import ErrorMessage from "../error/errorMessage/ErrorMessage";
import LoadingMessage from "../loadingMessage/LoadingMessage";


function PopularPicks() {

    const [popularRecipe, setPopularRecipe] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    async function fetchRecipesData() {
        toggleError(false);
        toggleLoading(true);
        try {
            const {data} = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`);
            console.log(data);
            setPopularRecipe(data.recipes);
        } catch (e) {
            console.error(e);
            toggleError(true);

        }
        toggleLoading(false);
    }

    useEffect(() => {
        fetchRecipesData();
    }, []);


    return (
        <section className="popular-recipes-wrapper">
            {loading &&
                <LoadingMessage/>
            }
            <h2 className="title"> Some popular recommendations for you</h2>
            {error &&
                <ErrorMessage/>
            }
            {popularRecipe.map((recipe) => {
                    return (<Card
                            key={recipe.id}
                            title={recipe.title}
                            image={recipe.image}
                            recID={recipe.id}
                            time={recipe.readyInMinutes}
                            glutenfree={recipe.glutenFree}
                        />
                    )
                }
            )}
        </section>
    );
}

export default PopularPicks;