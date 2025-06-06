import React from "react";


 function ChildComponent(props) {
    console.log("ChildComponent rendered");

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Child Component</h2>
            <p>Count: {props.childCount}</p>
            <button className="btn btn-primary" onClick={props.childincrement}>Child Increment Count</button>
        </div>
    );
}

export const MemorizedChildComponent = React.memo(ChildComponent);