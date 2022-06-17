import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../../../components/card/Card";
import {useParams} from "react-router-dom";

function Search() {


    const [ search, setSearch ] = useState('');
    const [recipes, setRecipes] = useState([]);

    const { id } = useParams();
    // console.log(id);

    //i need to compare id from my search result and pass it to
    // the search function and to the routing


    function handleSearch(e) {
        setSearch(e.target.value);
        // console.log(e.target.value);
    }

    function getSearch(e) {
        e.preventDefault();
        getSearchResult();

    }


    async function getSearchResult(){
        try{
            const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`);
            console.log(data.results);
            setRecipes(data.results);
            setSearch('');
        }catch(e){
            console.error(e);
        }
    }




    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={getSearch}>

                <input
                    className="search-bar"
                    autoFocus
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search any recipe"
                />
                <button
                type="submit"
                >Search</button>
            </form>

            <div>
                { recipes !== [] && recipes.map( (recipe) => {
                    return <Card
                        key={recipe.id}
                        recID={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                    />
                }) }
            </div>

        </div>
    );
};

export default Search;