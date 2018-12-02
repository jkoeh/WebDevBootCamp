import React from 'react';
import './TodoItem.css'

const TodoItem = ({ name, completed, onDelete, onToggle}) => {
    return (
        <li className={"task " + (completed ? 'done' : '')}>
            <span onClick={onToggle}>
                {name}
            </span>
            <span className="delete" onClick={onDelete}>X</span>
        </li>
    )
}
export default TodoItem;