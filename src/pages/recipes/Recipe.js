import  React from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import axios from "axios";


function Recipe() {

const { id, type } = useParams();


    return (
        <div>

           <h2>Recipes</h2>
            <nav>
                <Link to={`category/${type}`}>Category</Link>
                <Link to={`search/${id}`}>Search Recipes</Link>
            </nav>
            <Outlet/>

        </div>
    );
}

export default Recipe;