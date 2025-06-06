import {useState,useEffect} from "react";

export default function UseEffectDemo(){

    const [count,setNewCount]=useState(0);
    const [count2,setNewCount2]=useState(0);
    

    // useEffect is a hook that runs after the component has rendered
    //useEffect(() => {}) is triggered after every render and after the initial render
    //it's like componentDidMount and componentDidUpdate in class components
    // useEffect(()=>{
    //     //console.log("You have clicked the buttton"+ count+" times");
    //     console.log(`You have clicked the button ${count} times`); //string template literal syntax
    // })


    // useEffect with dependency array
    // useEffect(() => {
    //     console.log(`You have clicked the button ${count} times`);
    // },[]) //empty dependency array means it runs only once after the initial render

 

    useEffect(()=>{
        console.log(`You have clicked the button 1 ${count} times`);
    },[count]); //dependency array means it runs only when the count changes

    useEffect(()=>{
        console.log(`You have clicked the button 2 ${count2} times`);
    },[count2]); //dependency array means it runs only when the count2 changes

    const handleIncrement=()=>{
        setNewCount(count+1);
    }

     const handleIncrement2=()=>{
        setNewCount2(count2+1);
    }

    return(
        <div>
            <h3>UseEffect Demo</h3>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleIncrement2}>Increment2</button>

            </div>
            <div>
                <h4>Count:{count}</h4>
                <h4>Count:{count2}</h4>
            </div>
        </div>
    )
}