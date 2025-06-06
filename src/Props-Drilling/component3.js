
import { useContext } from "react"
import { MessageContext } from "./messageContext";

export default function Component3() {
    
 const {message,changeMessage} = useContext(MessageContext); // using context to get the message

    return(
        <div>
            <h3>Component 3</h3>
            <p>Message is : {message}</p>
            <button onClick={changeMessage} className="btn btn-primary">Change Message</button>
           
        </div>
    )
}