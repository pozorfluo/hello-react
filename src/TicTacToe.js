import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './tictactoe.css';

export const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export const Board = (props) => {
  const renderSquare = (i) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const Moves = (props) => {
  const formatted_list = props.list.map((entry, i) => {
    const desc = i ? 'Go to move #' + i : 'Reset';
    return (
      <li className="item" key={entry[0]}>
        {entry[0]} : {desc}
        <button className="x-button" onClick={() => props.onClick(i)}>
          &larr;
        </button>
      </li>
    );
  });

  return <ul style={{ listStyleType: 'none' }}>{formatted_list.reverse()}</ul>;
};

Moves.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const TicTacToe = () => {
  let [history, setHistory] = useState([[0, Array(9).fill(null)]]);
  const [turn, setTurn] = useState(true);
  const [step, setStep] = useState(0);

  console.log(step);
  const current = history[step][1];
  const winner = calculateWinner(current);
  const status = winner
    ? 'Winner : ' + winner
    : 'Next player : ' + (turn ? 'X' : 'O');

  const handleClick = (i) => {
    history = history.slice(0, step + 1);
    const count = history.length;
    const current = history[count - 1][1];
    const squares = [...current];
    if (calculateWinner(current) || squares[i]) {
      return;
    }
    squares[i] = turn ? 'X' : 'O';
    const id = count ? history[count - 1][0] + 1 : 0;
    /** This looks like a good place to break the symmetry and just use push. */
    setHistory([...history, [id, squares]]);
    setStep(count);
    setTurn(!turn);
  };

  const jumpTo = (step) => {
    setStep(step);
    setTurn(!(step & 1));
  };

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board squares={current} onClick={(i) => handleClick(i)} />
        </div>
      </div>

      <div className="status sidebar">
        {status}
        <Moves list={history} onClick={(step) => jumpTo(step)} />
      </div>
    </>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
