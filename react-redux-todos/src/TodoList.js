import React, { Component } from 'react';
import Todo from './Todo'
import {connect} from 'react-redux';
import NewTodoForm from './NewTodoForm';
import { addTodo, removeTodo } from "./actions/actionCreator";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(val){
        this.props.dispatch(addTodo(val));
    }
    handleDelete(id){
        this.props.dispatch(removeTodo(id));
    }
    render() {
        debugger;
        let todos = this.props.todos.map((val, index) => (<Todo key={index} task={val.task} 
            onDelete={this.handleDelete.bind(this, val._id)}/>))
        return (
            <div>
                <NewTodoForm handleSubmit={this.handleAdd}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    return {
        todos: reduxState.todos
      };
}
export default connect(mapStateToProps)(TodoList);