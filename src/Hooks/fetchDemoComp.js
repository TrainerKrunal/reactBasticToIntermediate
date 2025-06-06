import { useState } from "react";
import UseFetchDemo from "./useFetchDemo";

export default function FetchDemoComp() {

 const URL= "https://jsonplaceholder.typicode.com/posts"; // Example URL for fetching data
 const {data,loading,error}= UseFetchDemo(URL); // Using the custom hook to fetch data
 const [count,setCount]=useState(0)

 const handleIncrement = () => {
     // This function can be used to increment a counter or perform any other action
     console.log("Increment button clicked");
     setCount(count + 1); // Increment the count state
 };

  // You can add more functionality here as needed

  // Render the component

 return(
    <div>
        <h4>Count:{count}</h4>
        <button onClick={handleIncrement}>Increment Button</button>
        
        <h1>Fetch Demo</h1>
        { loading && <p>Loading...</p>}
        { error && <p style={{color:"red"}}>{error}</p>}
        { data && (
            <ul>
                {data.slice(0,10).map((item)=>(
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
 )

}