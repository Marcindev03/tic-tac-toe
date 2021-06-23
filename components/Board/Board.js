import { useState } from 'react';

import { Square } from '../Square/Square';

import styles from './Board.module.scss';

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

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(Math.floor(Math.random() * 2));

  const winner = calculateWinner(squares);
  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    let squaresCopy = squares.slice();
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquares(squaresCopy);
  };

  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => handleClick(i)} />
  );

  return (
    <div className={styles.boardWrapper}>
      <div className={styles.status}>
        {winner ? `${winner} is a winner` : status}
      </div>
      <div className={styles.wrapper}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}

        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}

        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
