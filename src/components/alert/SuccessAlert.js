import React from 'react';
import "./SuccessAlert.css"
import {MdDoneOutline} from "react-icons/md";

function SuccessAlert() {
    return (
        <div className="success">
            <h1>You are successfully registered!
                <span className="label"><MdDoneOutline/></span></h1>
            <h5>You will be redirected to the sign in page!</h5>
        </div>
    );
}

export default SuccessAlert;