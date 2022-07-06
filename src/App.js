import React, {useContext} from "react";
import { Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/header/header/Header";
import Home from "./pages/home/Home";
import Signin from "./pages/login/signIn/Signin";
import Register from "./pages/login/register/Register";
import Recipe from "./pages/recipes/Recipe";
import Category from "./pages/recipes/categories/Category";
import Search from "./pages/recipes/search/Search";
import RecipeDetails from "./pages/recipes/recipeDetails/RecipeDetails";
import Profile from "./pages/profile/Profile";
import NoMatch from "./pages/noMatch/NoMatch";
import {AuthContext} from "./context/AuthContextProvider";


function App() {

    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <Header/>
            <Routes>

                <Route path="/" element={<Home/>}/>

                <Route path="signin" element={<Signin/>}/>
                <Route path="register" element={<Register/>}/>

                <Route path="recipes/*" element={isAuth ?
                    (<Recipe/>)

                    :
                    (<Navigate replace to="/signin"/>)
                }
                >
                    <Route path="category/*" element={<Category/>}>
                        <Route path=":name" element={<Category/>}/>
                    </Route>

                    <Route path="search/:id" element={<Search/>}/>
                    <Route path="recipe-details/:name" element={<RecipeDetails/>}/>
                </Route>

                <Route path="profile" element={<Profile/>}/>

                <Route path="*" element={<NoMatch/>}/>

            </Routes>
        </>
    );
}

export default App;
