import React from "react";

function Button(props){
    return<div className="button-container">
    <button onClick={props.onClick}>{props.buttonText}</button>
    </div>
}

export default Button