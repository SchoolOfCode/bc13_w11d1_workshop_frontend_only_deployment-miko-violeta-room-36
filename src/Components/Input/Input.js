import React from "react";

function Input(props){
    return <div className="input-container">
        <input onChange={props.onChange} placeholder={props.placeholder} type="text"/>

    </div>
}

export default Input