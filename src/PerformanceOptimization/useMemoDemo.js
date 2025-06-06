import {useState,useMemo,useEffect} from "react";

export default function UseMemoDemo(){

    const [count,setCount]=useState(0); // State to hold the count value
    const [text,setText]=useState(""); // State to hold the text input value
    const [effectValue,setEffectValue]=useState(0); // State to hold the effect value

    const expensiveCalculation=(num)=>{
        console.log("Expensive calculation called")
        let result = 0 //initializing result to 0
        for (let i=0;i<100000000;i++){ // Simulating an expensive calculation by looping 1 billion times
            result += num; // Adding the current index and the input number
        }
        
        return result
    }

    const handleChange=(event)=>{
        console.log("Input changed") // Logging when the input changes
        setText(event.target.value); // Updating the text state with the input value
    }

    const incrementCount=()=>{
        console.log("Incrementing count") // Logging when the count is incremented
        setCount(count+1); // Incrementing the count state by 1
    }

    useEffect(()=>{
        console.log("useEffect called") // Logging when the useEffect hook is called
        const value = expensiveCalculation(count); 
        setEffectValue(value)// Calling the expensive calculation function when the component mounts or count changes
    },[count])

     const computedValue =useMemo(()=>expensiveCalculation(count),[count]); // Calling the expensive calculation function with the current count value

    return(
        <div>
            <h2>useMemo() Demo</h2>
            <p>Count:{count}</p>
            <p>Computed Value (useMemo):{computedValue}</p> 
            <p>Computer Value (useEffect):{effectValue}</p>

             <button className="btn btn-primary" onClick={incrementCount}>Increment Count</button>
            <br/>
            <br/>
            <input type="text" value={text} onChange={(event)=>handleChange(event)} placeholder="Type something..." />
            <p>Typed Text : {text}</p>
        </div>
    )

}