import React from "react";

function List(props){
    return <div className="list-container">
        <li>{props.listText}</li>

    </div>
}

export default List