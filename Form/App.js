import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Uservey from './Uservey';

class App extends Component{
  render(){
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <Uservey />
      </div>
    </div>
  );
  }
}

export default App;
