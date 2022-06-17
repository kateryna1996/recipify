import React from 'react';
import { Routes, Route  } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Recipe from "./recipes/Recipe";
import Category from "./recipes/categories/Category";
import Search from "./recipes/search/Search";

function Pages() {
    return (
        <div>
                    <h1>Pages</h1>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="login" element={<Login/>} />
                <Route path="recipes/*" element={<Recipe/>} >
                    <Route path="category/:name" element={<Category/>} />
                    <Route path="search/:id" element={<Search/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default Pages;