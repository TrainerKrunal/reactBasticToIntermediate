import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'; // useParams is a navigation hook that returns the URL parameters from the current route
import axios  from 'axios';

export default function UserDetails(){
    
    const [user,setNewUser]=useState({})
    const URL="https://jsonplaceholder.typicode.com/users";
    const params=useParams(); // usePrams is a navigation hook that returns the URL parameters from the current route


    const getUserDetails=async()=>{

        const response = await axios.get(`${URL}/${params.id}`)
        setNewUser(response.data); // setting the user state with the response data

    }

    useEffect(()=>{
        getUserDetails()
    },[]); // empty dependency array means this effect runs once once -- first time --- when the component mounts

    return(
        <div>
            <h1>User Details</h1>
            <hr/>
            <div className="row m-3">
                <div className="list-group">
                    <li className="list-group-item">ID:{user.id}</li>
                    <li className="list-group-item">Name: {user.name}</li>
                    <li className="list-group-item">Username: {user.username}</li>
                    <li className="list-group-item">Email: {user.email}</li>
                </div>
            </div>
        </div>
    )

}