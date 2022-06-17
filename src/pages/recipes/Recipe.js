import  React from 'react';
import {  Link, Outlet } from "react-router-dom";
import axios from "axios";


function Recipe() {




    return (
        <div>

           <h2>Recipes</h2>
            <nav>
                <Link to="category">Category</Link>
                <Link to="search">Search Recipes</Link>
            </nav>
            <Outlet/>

        </div>
    );
}

export default Recipe;