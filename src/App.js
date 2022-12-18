import React, { useState } from 'react';

const initialBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function handleClick(index) {
    if (board[index] !== '') {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  function checkForWinner() {
    for (const combination of winningCombinations) {
      if (board[combination[0]] !== '' && board[combination[0]] === board[combination[1]] && board[combination[1]] === board[combination[2]]) {
        return board[combination[0]];
      }
    }
    return null;
  }

  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }

  const winner = checkForWinner();
  let status;
  if (winner) {
    status = `Le joueur ${winner} a gagné !`;
  } else if (board.every(square => square !== '')) {
    status = "Match nul !";
  } else {
    status = `Au tour du joueur ${currentPlayer}`;
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

export default TicTacToe;
