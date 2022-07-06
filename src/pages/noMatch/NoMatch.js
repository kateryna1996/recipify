import React from 'react';

import "./NoMatch.css";

import cryingAvocado from "../../assets/—Pngtree—crying avocado illustration vector on_5299408.png";
import WrapperMain from "../../components/wrapper/WrapperMain";
import Button from "../../components/button/Button";


function NoMatch() {
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
                <Button
                    type="button"
                    className="back-home-button">
                    Go back to Home
                </Button>

        </WrapperMain>
    );
}

export default NoMatch;