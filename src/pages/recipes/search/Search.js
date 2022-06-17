import React from 'react';
import axios from "axios";

function Search({setSearch, search, setQuery, recipes}) {

    // function handleSearch(e) {
    //     setSearch(e.target.value);
    //     console.log(e.target.value);
    // }
    //
    function getSearch(e) {
        e.preventDefault();

    }


    async function getSearchResult(){
        try{
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=pasta`)
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
                    // onChange={handleSearch}
                    placeholder="Search any recipe"
                />
                <button
                type="submit"
                onClick={getSearchResult}
                >Search</button>
            </form>



        </div>
    );
};

export default Search;