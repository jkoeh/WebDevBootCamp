import React from 'react';
import './TodoItem.css'

const TodoItem =({name, completed})=>{
    return(
        <li className={"task " + (completed ? 'done' : '')}>
            {name}
            <span>X</span>
        </li>
    )
}
export default TodoItem;