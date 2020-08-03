import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Square, SquareFn } from './Square.js';
import { render } from '@testing-library/react';

function App() {
  const user = { firstname: 'Kakana', lastname: 'Lambert' };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Square user={user} />
        {/* <SquareFn value={i} /> */}
      </header>
    </div>
  );
}

export default App;
