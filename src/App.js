import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Square, SquareFn, TextField } from './Square.js';
import { render } from '@testing-library/react';

function App() {
  const user = { firstname: 'Kakana', lastname: 'Lambert' };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <Square user={user} /> */}
        <SquareFn user={user} />
        <TextField />
      </header>
    </div>
  );
}

export default App;
