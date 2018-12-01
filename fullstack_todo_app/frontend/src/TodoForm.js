import React, { Component } from 'react';
import './TodoForm.css'
import PropTypes from 'prop-types';

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
        this._handleChange = this._handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    _handleChange(e) {

        this.setState({ inputValue: e.target.value });
    }
    handleSubmit(e) {
        if (e.which === 13) {
            this.props.addTodo(this.state.inputValue)
            this.setState({ inputValue: "" });
        }
    }

    render() {
        return (
            <div className="form">
                <input type="text" id="todoInput" value={this.state.inputValue} placeholder="Insert your task here..." onChange={this._handleChange} onKeyDown={this.handleSubmit} />
            </div>
        )

    }
}
TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default TodoForm;