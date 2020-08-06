import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Todo} from './Todo.js';
// import { SquareFn, TextField } from './Square.js';
import {Temperature} from './BoilingTemp.js';
// import { render } from '@testing-library/react';
import { TicTacToe } from './TicTacToe.js';

function App() {
  //   const user = { firstname: 'Kakana', lastname: 'Lambert' };
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">TicTacToe</Link>
          </li>
          <li>
            <Link to="/boiling">BoilingTemp</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>

      <Switch>
      <Route path="/boiling">
          <div className="App">
            <header className="App-body">
              <Temperature/>
            </header>
          </div>
        </Route>
      <Route path="/todo">
          <div className="App">
            <header className="App-body">
              <Todo/>
            </header>
          </div>
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-body">

              <TicTacToe />
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-body">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}

    //     {/* <Square user={user} /> */}
    //     {/* <SquareFn user={user} id="00"/>
    //     <TextField id="00"/>
    //     <TextField id="01"/>
    //     <TextField id="02"/> */}
    //     <TicTacToe />
    //     {/* <Temperature/> */}
    //     {/* <Todo /> */}
    //   </header>
    // </div>
  );
}

export default App;
