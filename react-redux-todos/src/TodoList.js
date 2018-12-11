import React, { Component } from 'react';
import Todo from './Todo'
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import { addTodo, removeTodo } from "./actions/actionCreator";
import {Route} from 'react-router-dom';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(val) {
        this.props.addTodo(val);
    }
    handleDelete(id) {
        this.props.removeTodo(id);
    }
    render() {
        debugger;
        let todos = this.props.todos.map((val, index) => (<Todo key={index} task={val.task}
            onDelete={this.handleDelete.bind(this, val._id)} />))
        return (
            <div>
                <Route path="/todos/new" component={props =>
                    <NewTodoForm {...props} handleSubmit={this.handleAdd} />}
                />
                <Route exact path="/todos" component={() => <ul>{todos}</ul>} />
            </div>
        )
    }
}
function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    };
}
export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList);