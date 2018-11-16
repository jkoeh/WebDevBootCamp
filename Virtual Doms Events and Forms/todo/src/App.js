import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const TodoItem = ({text}) => (
  <li>{text}</li>
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState(() => ({todos, newTodo: ''
    }));
  }
  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((text, i)=>(
        <TodoItem key={i} text={text}/>
    ));
    return (
      <div className="App">
        <h1>Simple to do App</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What needs to be done?"
            name="newTodo"
            autoComplete="off"
            className="todo-input" value={newTodo}
            onChange={(e) => this.setState({[e.target.name]: e.target.value })} />
          <button className="save-button" type="submit">Save</button>
        </form>
        <div className="todo-content">
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
