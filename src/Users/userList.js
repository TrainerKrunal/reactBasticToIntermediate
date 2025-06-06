
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserList(){
    const [users,setNewUsers]=useState([]);
    const URL="https://jsonplaceholder.typicode.com/users";
    const navigate=useNavigate(); // useNavigate is a navigation hook that returns a function to navigate to a different route


    const getData=async()=>{
        const response = await axios.get(URL);
        setNewUsers(response.data); // setting the users state with the response data
    }

    useEffect(()=>{
        getData();
    },[]); // empty dependency array means this effect runs once once -- first time --- when the component mounts

    const tableData=users.map((user)=>{
        return(
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-primary" onClick={()=>navigate(`/details/${user.id}`)}>
                        View Details
                    </button>
                </td>
            </tr>
        )
    })

    return(
        <div>
            <h1>User List</h1>
            <table className="table table-bordered table-stripped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}