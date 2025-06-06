import { useState,useCallback } from "react";
import {MemorizedChildComponent} from "./childComponent";
export default function ReactMemoDemo() {

    const [parentCount,setParentCount] = useState(0);
    const [childCount,setChildCount] = useState(0);

    const incrementParentCount = () => {
        console.log("Parent count incremented");
        setParentCount(parentCount + 1);
    }

     const incrementChildCount =useCallback( () => {
         console.log("Child count incremented");
         setChildCount(childCount + 1);
    },[childCount])

    return(
        <div style={{padding:"20px",textAlign:"center"}}>
                <h2>React.memo()) Demo</h2>
                <button onClick={incrementParentCount}>Increment Parent Count</button>
                <MemorizedChildComponent childCount={childCount}  childincrement={incrementChildCount}/>
                <p>Parent Count: {parentCount}</p>
                <p>Child Count: {childCount}</p>
        </div>
    )

}