import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

import Card from "../../../components/card/Card";
import LoadingMessage from "../../../components/loadingMessage/LoadingMessage";
import ErrorMessage from "../../../components/error/errorMessage/ErrorMessage";
import PaginationButton from "../../../components/buttonPagination/PaginationButton";
import {BiUpArrowCircle} from "react-icons/bi";
import {AiOutlineFieldNumber} from "react-icons/ai";


function Search() {

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    let params = useParams();

    async function getSearchResult(search) {

        toggleError(false);
        toggleLoading(true);

        try {
            const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}&offset=${page}&number=9`);
            console.log(data);
            setRecipes(data.results);
            setPage(data.offset);
            setTotalResults(data.totalResults);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    useEffect(() => {
            getSearchResult(params.id);
        },
        [params.id, page]
    )

    return (
            <main className="wrapper-search">
                <h1>Search</h1>

                {loading && <LoadingMessage/>}
                {error && <ErrorMessage/>}

                {recipes.length > 0 ?
                    <div className="inner-content-container">
                        <h2>{params.id}</h2>
                        <h4>The <AiOutlineFieldNumber/> of results: {totalResults}</h4>
                    </div>
                    :
                    <div className="inner-content-container">
                        <h3 className="warning-message">
                            Please type first what you want to look for!
                            < BiUpArrowCircle/>
                        </h3>
                    </div>
                }

                <div className="popular-recipes-wrapper">
                    {recipes.length > 0 && recipes.map((recipe) => {
                        return <Card
                            key={recipe.id}
                            recID={recipe.id}
                            title={recipe.title}
                            image={recipe.image}
                        />
                    })
                    }
                </div>
                {recipes.length > 0 && <PaginationButton page={page} setPage={setPage}/>}
            </main>
    );
}

export default Search;