import React from 'react';
import {RiEyeCloseLine, RiEyeLine} from "react-icons/ri";

function ToggleVisibilityButton({togglePasswordOpen, passwordOpen}) {
    return (
        <button
            type="button"
            className="show-password"
            onClick={() => togglePasswordOpen(!passwordOpen)}
        >
            {passwordOpen ? <RiEyeLine size="30px"/> : <RiEyeCloseLine size="30px"/>}
        </button>
    );
}

export default ToggleVisibilityButton;