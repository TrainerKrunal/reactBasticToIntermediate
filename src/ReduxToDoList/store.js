import { createStore } from "redux";


//Actions

const ADD_TODO="ADD_TODO";
const REMOVE_TODO="REMOVE_TODO";

//Action Creators
export const addTodo=(todo)=>{
    return {
        type:ADD_TODO,
        payload:todo
    }
}

export const removeTodo=(todo)=>{
    return {
        type:REMOVE_TODO,
        payload:todo
    }
}

const initialState = {
    todos: [] // Initial state with an empty todos array
}

//Reducer
const todoRecuer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload] // Add new todo to the array
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload) // Remove todo by ID
            };
        default:
            return state; // Return current state if no action matches
    }
}

const store = createStore(todoRecuer); // Create Redux store with the reducer

export default store; // Export the store to be used in the application