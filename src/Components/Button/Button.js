import React from "react";

function Button(props){
    return<div className="button-div">
    <button onClick={props.onClick}>{props.buttonText}</button>
    </div>
}

export default Button