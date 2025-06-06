import {useState,useEffect} from "react";


export default function UseFetchDemo(url) {

 const [data,setdata] = useState(null);
 const [loading,setLoading] = useState(true);
 const [error,setError] = useState(null);

 const fetchData=async()=>{
    try{
        const response = await fetch(url); // Fetch data from the provided URL
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json(); // Parse the JSON response
        setdata(result); // Update the state with the fetched data
    }
    catch(error){
        setError(error); // Set the error state if an error occurs
    }
    finally{
        setLoading(false); // Set loading to false after fetching data
    }
 }

 useEffect(()=>{fetchData()},[url])

 return {data,loading,error}; // Return the fetched data, loading state, and error state

}