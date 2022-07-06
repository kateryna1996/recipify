import React from 'react';
import "./FoodCard.css";

function FoodCard({title, description, img}) {
    return (
        <article className="card">
            <div className="card-text">
                <h2> {title}</h2>
                <p> {description} </p>
            </div>
            <img src={img}
                 alt={title}
                 className="food-image"
            />
        </article>
    );
}

export default FoodCard;