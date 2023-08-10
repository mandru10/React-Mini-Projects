import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render(){
    let movies = [
      { name: 'Spiderman', price: 100 },
      { name: 'Batman', price: 200 },
      { name: 'Flash', price: 300 },
      { name: 'Thor', price: 400 },

    ]
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Movies Purchase Page</h2>
      </div>
      <Coursesales items={movies}/> 
    </div>
  );
}
}

export default App;
