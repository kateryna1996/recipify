import React from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import "./Recipe.css"
import WrapperMain from "../../components/wrapper/WrapperMain";
import PopularPicks from "../../components/popularPicks/PopularPicks";
import SearchBar from "../../components/searchBar/SearchBar";
import {UnorderedList} from "../../components/functionalComponents/UnorderedList";
import {RecipeNavigationItem} from "../../components/functionalComponents/RecipeNavigationItem";


function Recipe() {

    const {id} = useParams();

    return (
        <WrapperMain>
            <article className="recipe">

                <h1 className="title">
                    <Link to="/recipes"
                          className="link-to-recipes"
                    >
                        Recipes
                    </Link>
                </h1>

                <UnorderedList className="navigation-wrapper">
                    <RecipeNavigationItem
                        path={"category"}
                        title="Category"
                    />
                    <RecipeNavigationItem
                        path={`search/${id}`}
                        title="Search Recipes"
                    />
                </UnorderedList>
                <SearchBar/>
                <Outlet/>
                <PopularPicks/>
            </article>
        </WrapperMain>
    );
}

export default Recipe;