import React from 'react';
import {MdDoneOutline} from "react-icons/md";

function SuccessChange() {
    return (
        <div className="success">
            <h1>You have successfully changed your password!
                <span className="label"><MdDoneOutline/></span></h1>
            <h5>The system will log you out and you will be redirected to the sign in page!</h5>
            <h3>You may now log in with your new email. </h3>
        </div>
    );
}

export default SuccessChange;