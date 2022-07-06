import React from 'react';

import "./ErrorMessage.css"
import errorMessage from "../../../assets/warning.png";

function ErrorMessage() {
    return (
        <section className="outer-content-container">
            <div className="section-body">
                <h1 className="error-message-data-fetch">Something went wrong during data fetching, our
                    apologies!</h1>
                <h3>Please try again!</h3>
                <div className="not-found__image-wrapper">
                    <img src={errorMessage}
                         alt="error"
                         className="not-found__image"
                    />
                </div>
            </div>
        </section>
    );
}

export default ErrorMessage;