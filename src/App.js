import React, { Component } from 'react';
import './App.css';
import './styles.css';

class App extends Component {
  render() {

    fetch('https://project-horizon-rails.herokuapp.com/test')
      .then(e=>e.json())
      .then(e=>console.log(e))

    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
