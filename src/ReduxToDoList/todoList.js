import { useState } from "react";
import { addTodo,removeTodo } from "./store";
import { useSelector, useDispatch } from "react-redux";


export default function TodoList() {
    const [todoText, setTodoText] = useState("");
   
    const dispatch = useDispatch(); // Getting the dispatch function from Redux

    const handleAddTodo=()=>{
        if(todoText.trim()){
            dispatch(addTodo({id:Date.now(),text:todoText})); // Dispatching the addTodo action with a new todo object
            setTodoText(""); // Resetting the input field
        }
    }

   
    return(
        <div>
            <h1>ToDo List</h1>
            <input type="text"
                   value={todoText}
                   onChange={(event)=>setTodoText(event.target.value)}
                   placeholder="Enter a todo item"/>
            <button onClick={handleAddTodo}>Add Todo</button>
            
        </div>
    )
}