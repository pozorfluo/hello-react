import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Square, SquareFn} from './Square.js';
import { render } from '@testing-library/react';

function App() {
    const i = 'Kakana'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Why aren't ya spinnin mate ??
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Square value={i}/>
        <SquareFn value={i}/>
      </header>
    </div>
  );
}



export default App;
