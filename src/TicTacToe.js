import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './tictactoe.css';

export const Square = (props) => {
  return (
    <button className="square">
      {/* TODO */}
    </button>
  );
}

export const Board = (props) => {
  const status = 'Next player: X';
  
  const renderSquare = (i) => {
    return <Square />;
  }

  return (
    <div>
      <div className="status">{status}</div>
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
}

export const TicTacToe = () =>
{
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

