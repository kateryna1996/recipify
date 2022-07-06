import React from 'react';
import "./ErrorInput.css";
import {MdError} from "react-icons/md";


function ErrorInput({children}) {
    return (
        <h3 className="error-message">
            <MdError/>
            {children}
        </h3>
    );
}

export default ErrorInput;