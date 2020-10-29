import React from 'react';
import Button1Styles from "./Button1.scss";

function Button1(props) {
    return (
          <button className="but">{props.text}</button>
    )
}

export default Button1;
