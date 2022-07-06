import React from 'react';
import "./WrapperMain.css";


function WrapperMain({children, ...rest}) {
    return (
        <main className="outer-content-container" {...rest}>
            <section className="inner-content-container">
                {children}
            </section>
        </main>
    );
}

export default WrapperMain;