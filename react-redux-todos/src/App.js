import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import { Link, Redirect, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>todoList</h1>
        </header>
        <p><Link to="/todos/">See todos</Link></p>
        <p><Link to="/todos/new">Add todos</Link></p>
        <Route path="/todos" component={TodoList} />
        <Route exact path="/" render={()=><Redirect to="/todos"/>} />
      </div>
    );
  }
}

export default App;
