import React from "react";

function Input(props){
    return <div className="input-div">
        <textarea value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text"/>

    </div>
}

export default Input