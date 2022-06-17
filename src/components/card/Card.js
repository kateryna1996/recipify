import React, {useState} from 'react';
import {Link, NavLink, useParams} from "react-router-dom";
import axios from "axios";

function Card({ title,  image,  recID }) {


    return (
        <article >
            <Link >
            <h2>{title}</h2></Link>
                <img src={image}
                 alt={title}
            />

        </article>
    );
};

export default Card;