import React from 'react';

import "./CenteredLabel.css";

function CenteredLabel({children, title}) {
    return (
        <div className="centered-label">
            {children}
            <span>{title}</span>
        </div>
    );
}

export default CenteredLabel;