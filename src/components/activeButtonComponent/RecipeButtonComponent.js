import React from 'react';

function RecipeButtonComponent({title, children}) {
    return (
        <>
            <h2 className="title">{title}</h2>
            <div className="section-wrapper">
                {children}
            </div>
        </>
    );
}

export default RecipeButtonComponent;