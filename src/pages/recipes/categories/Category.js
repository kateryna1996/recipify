import React, {useEffect, useState} from 'react';
import CategoryList from "../../../components/categoryList/CategoryList";
import {useParams, Navlink} from "react-router-dom";
import axios from "axios";


function Category() {

    const [ type, setType] = useState([]);

    let params = useParams();



    async function getCategory(type){
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${type}`)
            setType(response.data.results);
        }catch (e) {
            console.error(e);
        }
    }

    useEffect( () => {
        getCategory(setType);
        // console.log(params.name);
    })
    return (
        <div>
            <h2>Categories</h2>
            <CategoryList/>
        </div>
    );
};

export default Category;