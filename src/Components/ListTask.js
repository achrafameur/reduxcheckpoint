import React from 'react';
import Todo from './Task'

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map(elm =><Todo todo={elm}/>)}
        </div>        
    );
}

export default TodoList