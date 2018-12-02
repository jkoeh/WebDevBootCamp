import React, { Component } from 'react';
import './App.css';
import CountryGame from './CountryGame'

class App extends Component {  
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <h1>Guess The Flag</h1>
          </header>
        </div>
        <CountryGame/>

      </div>


    );
  }
}

export default App;
