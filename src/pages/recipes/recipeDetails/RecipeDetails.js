import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

import "./RecipeDetails.css";
import {MdOutlineTimer} from "react-icons/md";
import ErrorMessage from "../../../components/error/errorMessage/ErrorMessage";
import LoadingMessage from "../../../components/loadingMessage/LoadingMessage";
import RecipeButtonComponent from "../../../components/activeButtonComponent/RecipeButtonComponent";
import salad from "../../../assets/salad.png";
import {FcLike} from "react-icons/fc";
import {UnorderedList} from "../../../components/functionalComponents/UnorderedList";


function RecipeDetails() {
    //---> button?

    const [details, setDetails] = useState({});
    const [activeButton, setActiveButton] = useState("instructions");
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    let params = useParams();

    async function getDetails() {
        toggleError(false);
        toggleLoading(true);
        try {
            const {data} = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information/?apiKey=${process.env.REACT_APP_API_KEY}`)
            console.log(data);
            setDetails(data);
        } catch (e) {
            console.log(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    useEffect(() => {
        getDetails();
        window.scrollTo(0, 0);
    }, [params.name])


    return (
        <section className="popular-recipes-wrapper recipe-details">
            <div className="group">
                {loading &&
                    <LoadingMessage/>
                }
                {error &&
                    <ErrorMessage/>
                }
                <article className="group-title">
                    <h1 className="title">{details.title}</h1>
                    <h4><FcLike/> Likes: {details.aggregateLikes} </h4>
                    <h4>
                        <span><MdOutlineTimer/></span>
                        {details.readyInMinutes} mins
                    </h4>
                    <h4 className="earth">
                        Servings:
                        <span className="details-color">
                            {details.servings}
                        </span>
                    </h4>
                    <h4 className="earth">
                        Health Score:
                        <span className="details-color">
                            {details.healthScore}
                        </span>
                    </h4>
                </article>
                { details.image ?
                    <img src={details.image}
                         alt={details.title}
                         className="main-image"/>
                    :
                    <img src={salad}
                         alt="no-picture-found"
                         className="default-image"
                    />
                }

            </div>


            <div className="description">
                <p dangerouslySetInnerHTML={{__html: details.summary}}/>
            </div>

            <article className="buttons">
                <button
                    type="button"
                    className={activeButton === "instructions" ? "active-button" : ""}
                    onClick={() => setActiveButton("instructions")}
                >
                    Instructions
                </button>

                <button
                    type="button"
                    className={activeButton === "ingredients" ? "active-button" : " "}
                    onClick={() => setActiveButton("ingredients")}
                >
                    Ingredients
                </button>

                <button
                    type="button"
                    className={activeButton === "shopping-list" ? "active-button" : " "}
                    onClick={() => setActiveButton("shopping-list")}
                >
                    Shopping List
                </button>
            </article>

            {activeButton === "instructions" &&
                <RecipeButtonComponent
                    title="Instructions"
                >
                    <ol>
                        <p dangerouslySetInnerHTML={{__html: details.instructions}}/>
                    </ol>
                </RecipeButtonComponent>
            }
            {activeButton === "ingredients" &&
                <RecipeButtonComponent
                    title="Ingredients List"
                >
                    <UnorderedList className="ingredients">
                        {details.extendedIngredients.map((item, index) => {
                            return <li key={index}>
                                {item.original}
                            </li>
                        })}
                    </UnorderedList>
                </RecipeButtonComponent>
            }
            {activeButton === "shopping-list" &&
                <RecipeButtonComponent
                    title="Shopping List"
                >
                    <UnorderedList className="shop-list">
                        {details.extendedIngredients.map((item) => {
                            return <li key={`${item.id} - ${item.name}`}>
                                <h4>{item.name} </h4>
                                <p> The aisle : <em>{item.aisle}</em></p>
                            </li>
                        })
                        }
                    </UnorderedList>
                </RecipeButtonComponent>
            }

        </section>
    );
}

export default RecipeDetails;