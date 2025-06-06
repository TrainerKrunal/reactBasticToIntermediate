import { useState } from "react";

export default function UseStateDemo(){

           //state object  update function   hook default value
    const [counterValue,setCounterValue] = useState(0);
    const [firstName,setFirstName]=useState("Krunal")
    const [text,setText]=useState("");

    const handlerIncrement=()=>{
        setCounterValue(counterValue+1);
    }

    const handlerDecrement=()=>{
        setCounterValue(counterValue-1);
    }   

    const switchNameHandler=()=>{
        if(firstName==="Krunal"){
            setFirstName("React with JPMC");
        }else{
            setFirstName("Krunal");
        }
    }

    const handleTextChange=(event)=>{
        setText(event.target.value);
    }

    return(
        <div>
            <h3>Counter</h3>
            <div>
                <button onClick={handlerIncrement}>Increment</button>
                <button onClick={handlerDecrement}>Decrement</button>
                <button onClick={switchNameHandler}>Switch Name</button>
            </div>
            <div>
                <input type="text"
                        defaultValue={firstName}
                        onChange={handleTextChange}
                        placeholder="Type Something"/>
                
                <p>Text:{text}</p>
            </div>
            <div>
                <h4>Value:{counterValue}</h4>
                <h4>Name:{firstName}</h4>
            </div>
        </div>
    )
     

}




