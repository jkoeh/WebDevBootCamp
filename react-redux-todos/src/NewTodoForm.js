import React, { Component } from "react";

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: '',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>Task</label>
                <input
                    type='text'
                    name='task'
                    id='task'
                    onChange={this.handleChange}
                />
                <button>Add a Todo!</button>
            </form>
        )
    }
}
export default NewTodoForm;