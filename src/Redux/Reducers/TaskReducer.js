import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_FILTER, TOGGLE_TODO ,DONE_TODO } from "../actions/ActionType";

const initState ={
    filter: 'All',
    todos:[]
}
const taskReducer=(state=initState,{type,payload})=>{
    switch (type) {
        
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter( (elm) => elm.id !== payload)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((elm) => elm.id === payload ? {...elm,isDone : !elm.isDone} : elm)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((elm) => elm.id === payload.id ? payload : elm)
            }
        case TOGGLE_FILTER:
            return {
                ...state,
                filter:payload
            }
        case DONE_TODO:
            return {
                ...state,
                todos:state.todos.map((el)=> 
                el.id === payload ? {...el, isDone: !el.isDone} : el
                ),
            }
        default:
            return state

    }
}
export default taskReducer;