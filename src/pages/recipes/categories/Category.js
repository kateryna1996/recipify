import React, {useState} from 'react';
import CategoryList from "../../../components/categoryList/CategoryList";
import {useParams} from "react-router-dom";
import axios from "axios";


function Category() {

    return (
        <div>
            <h2>Categories</h2>
            <CategoryList/>
        </div>
    );
};

export default Category;