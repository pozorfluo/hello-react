import React from 'react';
import './App.css';
// import { SquareFn, TextField } from './Square.js';
import {Temperature} from './BoilingTemp.js';
// import { render } from '@testing-library/react';

function App() {
//   const user = { firstname: 'Kakana', lastname: 'Lambert' };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <Square user={user} /> */}
        {/* <SquareFn user={user} id="00"/>
        <TextField id="00"/>
        <TextField id="01"/>
        <TextField id="02"/> */}
        <Temperature />
      </header>
    </div>
  );
}

export default App;
