import { uuid } from "uuidv4"
import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO, TOGGLE_FILTER, TOGGLE_TODO } from "./ActionType"

export const addTodo=(newTodo)=>{
    return{
        type: ADD_TODO,
        payload: {...newTodo,id:uuid(),isDone:false}
    }
}

export const deleteTodo=(id)=>{
    return{
        type: DELETE_TODO,
        payload:id
    }
}

export const toggleTodo=(id)=>{
    return{
        type: TOGGLE_TODO,
        payload:id
    }
}

export const editTodo=(editedTodo)=>{
    return{
        type: EDIT_TODO,
        payload:editedTodo
    }
}

export const filterTodo=(filter)=>{
    return{
        type: TOGGLE_FILTER,
        payload:filter
    }
}

export const doneTodo=(id)=>{
    console.log(id)
    return{
        type: DONE_TODO,
        payload:id
    }
}