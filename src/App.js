import React, { useState } from "react";
import Square from "./tictak/Square";
import "./App.css";
// import "./tictak/Square.css";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [Xturn, setXturn] = useState(true);
  const [count, setCount] = useState(0);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[b];
      }
    }

    if (count === 9) return "No";
    else return false;
  };

  // setCount(count + 1);
  const isWinner = checkWinner();
  // console.log(isWinner);

  function handleClick(index) {
    if (squares[index] == null) {
      setCount(count + 1);
      const copySquare = [...squares];
      copySquare[index] = Xturn ? "X" : "O";
      setSquares(copySquare);
      setXturn(!Xturn);
    } else return;
  }

  const handleReset = () => {
    setCount(0);
    setSquares(Array(9).fill(null));
  };

  return (
    <div>
      {isWinner === "X" || isWinner === "O" || isWinner === "No" ? (
        <div className="chance">
          {isWinner} wins
          <button className="play-again" onClick={handleReset}>
            Play Again
          </button>
        </div>
      ) : (
        <div className="board">
          <div className="chance">Player {Xturn ? "X" : "O"} your chance</div>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>

          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>

          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      )}
    </div>
  );
}
