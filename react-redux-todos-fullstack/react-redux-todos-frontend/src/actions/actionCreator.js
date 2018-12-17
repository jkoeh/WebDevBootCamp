export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODO = "GET_TODO";
const axios = require('axios');

function handleTodos(data){
    return{
        type: GET_TODO,
        data
    }
}
function handleAdd(data) {
    return {
        type: ADD_TODO,
        data
    }
}
function handleRemove(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}
export function getTodo(){
    return dispatch =>{
        return axios.get('http://localhost:3001/api/todos')      
        .then(resp=> dispatch(handleTodos(resp.data)))
        .catch(err=> console.log(err));
    };
}
export function addTodo(task){
    return dispatch =>{
        return axios.post('http://localhost:3001/api/todos', {task})
        .then(resp=> dispatch(handleAdd(resp.data)))
        .catch(err=> console.log(err))
    };
}
export function removeTodo(id){
    return dispatch =>{
        return axios.delete(`http://localhost:3001/api/todos/${id}`)
        .then(resp=> dispatch(handleRemove(id)))
        .catch(err=> console.log(err))
    };
}