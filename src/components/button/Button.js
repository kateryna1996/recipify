import React from 'react';

function Button( {nameOfClass, activeButtonName, setActiveButtonFunction }) {
    return (
        <button
            type="button"
            className={activeButtonName === {nameOfClass} ? "active-button" : " "}
            onClick={() => setActiveButtonFunction(nameOfClass)}
        >
            {nameOfClass}
        </button>
    );
}

export default Button;