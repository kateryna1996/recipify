import React from 'react';
import {useNavigate} from "react-router-dom";

import "./Card.css"
import salad from "../../assets/salad.png";


function Card({title, image, recID, children}) {

    let navigate = useNavigate();

    function cutString(string) {
        return string.length > 34 ? string.slice(0, 32) + "..." : string;
    }

    let text = cutString(title);


    return (
        <article className="card-recipe">
            <div className="recipe-link"
                 onClick={() => navigate(`/recipes/recipe-details/${recID}`, {replace: true})}
            >
                <div>
                    {image ? <img src={image}
                                  alt={title}
                                  className="recipe-image"
                        /> :
                        <img src={salad}
                             alt="no-picture-found"
                             className="default-image"
                        />
                    }
                </div>
                <h2 className="recipe-title">{text}</h2>
                {children}
                <div className="see-more">
                    <p>See more...</p>
                </div>
            </div>
        </article>
    );
}

export default Card;