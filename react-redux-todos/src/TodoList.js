import React, { Component } from 'react';
import Todo from './Todo'
import {connect} from 'react-redux';
import NewTodoForm from './NewTodoForm';
class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        debugger;
        let todos = this.props.todos.map((task, index) => (<Todo key={index} task={task} />))
        return (
            <div>
                <NewTodoForm/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    debugger;
    return {
        todos: reduxState.todos
      };
}
export default connect(mapStateToProps)(TodoList);