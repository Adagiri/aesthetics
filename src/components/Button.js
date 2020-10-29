import React from 'react';
import ButtonStyles from "./Button.scss";

function Button(props) {
    return (
        <button className="butt">{props.text}</button>
    )
};

export default Button;
