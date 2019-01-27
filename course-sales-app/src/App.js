import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    const course = [
      { name: 'Complete IOS Dev Course', price:199 },
      { name: 'Complete Front End Dev Course', price:299 },
      { name: 'Complete Python Course', price:180 },
      { name: 'Complete C++ Course', price:190 }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course purchase Page</h1>
        </header>
      <Coursesales items = {course} />
      </div>
    );
  }
}

export default App;
