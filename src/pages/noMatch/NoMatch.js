import React from 'react';

import "./NoMatch.css";
import cryingAvocado from "../../assets/crying avocado.png";
import WrapperMain from "../../components/wrapper/WrapperMain";
import {useNavigate} from "react-router-dom";


function NoMatch() {

    let navigate = useNavigate();

    return (
        <WrapperMain>

                <h1 className="title">No Page Found</h1>
                <h1 className="not-found__text">Error 404</h1>
                <div className="not-found__image-wrapper">
                    <img src={cryingAvocado}
                         alt="crying-avocado"
                         className="not-found__image"
                    />
                </div>
                <button
                    type="button"
                    className="back-home-button"
                    onClick={() => navigate("/", {replace: true})}
                >
                    Go back to Home
                </button>

        </WrapperMain>
    );
}

export default NoMatch;