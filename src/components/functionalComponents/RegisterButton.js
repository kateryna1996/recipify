import React from 'react';
import {useNavigate} from "react-router-dom";


function RegisterButton({children, path}) {
    let navigate = useNavigate();
    return (
        <div
            className="reg-button"
            onClick={()=> navigate(path,{replace: true} )}
        >
            {children}
        </div>
    );
}

export default RegisterButton;