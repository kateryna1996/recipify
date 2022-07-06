import React, {useState} from 'react';

import "./SearchBar.css";
import {AiOutlineSearch} from "react-icons/ai";
import {useNavigate} from "react-router-dom";


function SearchBar() {
    //    validate search
    const [search, setSearch] = useState('');

    let navigate = useNavigate();

    function getSearch(e) {
        e.preventDefault();
        navigate(`search/${search}`);
        setSearch('');
    }


    return (
        <div className="searchbar">
            <h3>SearchBar</h3>
            <form
                onSubmit={getSearch}
                className="searchbar-form"
            >
                <input
                    className="search-bar"
                    autoFocus
                    type="text"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)}
                    placeholder="Search for any recipe"
                />
                <button
                    type="submit"
                    className="searchbar-button"
                >
                    <AiOutlineSearch
                        color="white"
                        size="40px"
                    />
                </button>
            </form>


        </div>
    );
}

export default SearchBar;