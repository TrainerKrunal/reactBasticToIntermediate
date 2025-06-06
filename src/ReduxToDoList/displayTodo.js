
import { removeTodo } from "./store";
import { useSelector, useDispatch } from "react-redux";

export default function DisplayTodo() {
     const todos = useSelector((state)=>state.todos); // Accessing todos from the Redux store

     const dispatch = useDispatch()

      const handleRemoveTodo=(id)=>{
        dispatch(removeTodo(id)); // Dispatching the removeTodo action with the todo ID
    }

     return(
        <div>
             <h1>Display To DO List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
     )
}