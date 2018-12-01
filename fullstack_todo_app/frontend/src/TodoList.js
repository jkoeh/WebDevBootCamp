import React, { Component } from 'react';
import axios from 'axios';
import './TodoList.css'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
const APIURL = '/api/todos/';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
    }
    componentWillMount() {
        this.loadTodos();
    }
    loadTodos() {
        axios.get(APIURL)
            .then(resp => this.setState({ todos: resp.data }))
            .catch(err => this.handleErr(err))
    }
    handleErr(e) {
        if (e.statusText !== 'OK' && e.status >= 400 && e.status < 500) {
            throw e;
        }
        else {
            let error = { errorMessage: 'Please try again later, server is not responding' }
            throw error;
        }
    }
    addTodo(name){
         axios.post(APIURL,  { name: name })
            .then(newTodo=> this.setState({todos:[...this.state.todos, newTodo.data]}))
            .catch(err=>this.handleErr(err));
    }
    render() {
        let todos = this.state.todos.map(x => (
            <TodoItem key={x._id}
                {...x}
            />));
        return (
            <div>
                <h1>todo<span>list</span></h1>
                <h2>A simple todo list app built with node</h2>
                <TodoForm addTodo={this.addTodo}/>
                <ul className="list">
                    {todos}
                </ul>
            </div>
        )
    }
}
export default TodoList;