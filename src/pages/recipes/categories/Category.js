import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

import "./Category.css";
import Card from "../../../components/card/Card";
import CategoryList from "../../../components/categoryList/CategoryList";
import LoadingMessage from "../../../components/loadingMessage/LoadingMessage";
import ErrorMessage from "../../../components/error/errorMessage/ErrorMessage";
import PaginationButton from "../../../components/buttonPagination/PaginationButton";


function Category() {

    const [type, setType] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    let params = useParams();

    async function getCategory(type) {

        toggleError(false);
        toggleLoading(true);

        try {
            const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${type}&number=9&offset=${page}`)
            setType(data.results);
            setPage(data.offset);
            setTotalResults(data.totalResults);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    useEffect(() => {
        getCategory(params.name);
    }, [params.name, page])


    return (
        <div className="popular-recipes-wrapper">
            <CategoryList/>
            {loading && <LoadingMessage/>}

            <h2 className="title">Categories</h2>
            {error && <ErrorMessage/>}
                    <div className="inner-content-container warning-message ">
                        <h5>{params.name}</h5>
                        <h4>The number of results: <em>{totalResults}</em></h4>
                    </div>
                    {
                        type.map((recipe) => {
                            return <Card
                                recID={recipe.id}
                                key={recipe.id}
                                image={recipe.image}
                                title={recipe.title}
                            />
                        })
                    }
                    <PaginationButton page={page} setPage={setPage}/>
        </div>
    );
}

export default Category;