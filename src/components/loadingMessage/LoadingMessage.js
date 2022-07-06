import React from 'react';

import "./LoadingMessage.css";
import loadingGif from "../../assets/loading.gif";
import WrapperMain from "../wrapper/WrapperMain";
import {Section} from "../functionalComponents/Section";



function LoadingMessage() {
    return (
        <WrapperMain>
            <Section>
                <article className="loading">
                    <h1>Loading...</h1>
                    <div className="not-found__image-wrapper">
                        <img src={loadingGif}
                             alt="loading"
                             className="not-found__image"
                        />
                    </div>
                </article>
            </Section>
        </WrapperMain>
    );
}

export default LoadingMessage;