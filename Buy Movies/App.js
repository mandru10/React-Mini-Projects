import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render(){
    let movies = [
      { name: 'Thor', price: 100 },
      { name: 'Batman', price: 140 },
      { name: 'Superman', price: 160 },
      { name: 'Flash', price: 110 }
    ];

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Course Purchase Page</h2>
      </div>
      <Coursesales movies={movies}/>
    </div>
  );
}
}

export default App;
