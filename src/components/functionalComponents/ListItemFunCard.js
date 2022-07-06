import React from "react";

export function ListItemFunCard({step, description, className}) {
    return (
        <li className="one-card">
            <div className="funcard-text">
                <h5>{step}</h5>
                <p>{description}</p>
            </div>
            <div className={className}/>
        </li>
    );
}