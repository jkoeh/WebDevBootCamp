import axios from 'axios';
const APIURL = '/api/todos/';

const handleErr = (e) => {
    if (e.statusText !== 'OK' && e.status >= 400 && e.status < 500) {
        throw e;
    }
    else {
        let error = { errorMessage: 'Please try again later, server is not responding' }
        throw error;
    }
}
export const getTodos = async () => {
    return axios.get(APIURL)
        .then(resp => resp.data)
        .catch(err => handleErr(err));
}
export const updateTodo = async (todo) => {
    return axios.put(APIURL + todo._id, { completed: !todo.completed })
        .then(resp => resp.data)
        .catch(err => handleErr(err))
}
export const deleteTodo = async(id)=>{
    return axios.delete(APIURL + id)
            .catch(err => this.handleErr(err));        
}
export const createTodo = async(name)=>{
    return axios.post(APIURL, { name: name })
    .then(newTodo => newTodo.data )
    .catch(err => this.handleErr(err));
}