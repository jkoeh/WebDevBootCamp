import React, { Component } from 'react';
import './TodoList.css'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCall from './apiCall'

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
    async loadTodos() {
        let todos = await apiCall.getTodos();
        this.setState({ todos });
    }
    // handleErr(e) {
    //     if (e.statusText !== 'OK' && e.status >= 400 && e.status < 500) {
    //         throw e;
    //     }
    //     else {
    //         let error = { errorMessage: 'Please try again later, server is not responding' }
    //         throw error;
    //     }
    // }
    async onToggle(todo) {    
        let newTodo = await apiCall.updateTodo(todo);
        const todos = this.state.todos.map(t => (t._id === newTodo._id) ? { ...newTodo } : t);
        this.setState({ todos });
    }
    async onDelete(id) {
        await apiCall.deleteTodo(id);
        const todos = this.state.todos.filter(x => x._id !== id);
        this.setState({ todos });
    }
    async addTodo(name) {
        let newTodo=await  apiCall.createTodo(name);
        this.setState({ todos: [...this.state.todos, newTodo] });
    }
    render() {
        let todos = this.state.todos.map(x => (
            <TodoItem key={x._id}
                {...x}
                onDelete={this.onDelete.bind(this, x._id)}
                onToggle={this.onToggle.bind(this, x)}
            />));
        return (
            <div>
                <h1>todo<span>list</span></h1>
                <h2>A simple todo list app built with node</h2>
                <TodoForm addTodo={this.addTodo} />
                <ul className="list">
                    {todos}
                </ul>
            </div>
        )
    }
}
export default TodoList;