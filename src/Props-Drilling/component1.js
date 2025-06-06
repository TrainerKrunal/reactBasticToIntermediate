import { useState } from "react";
import Component2 from "./component2";
import { MessageContext } from "./messageContext";

export default function Component1() {

    const [message,setMessage] = useState("Hello from Component 1");

    const changeMessage = () => {
        setMessage("React with Context API");
    }

    return(
        <MessageContext.Provider value={{message,changeMessage}}>
            <h3>Component1</h3>
            <p>Message is : {message}</p>
            <button onClick={changeMessage} className="btn btn-primary">Change Message</button>
            <Component2  />
          
        </MessageContext.Provider>
    )
}