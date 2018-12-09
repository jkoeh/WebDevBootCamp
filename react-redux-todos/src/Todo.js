import React from 'react';
const Todo=({task, onDelete})=>{
    return(<li>{task} <span onClick={onDelete}>X</span></li>)
}
export default Todo;