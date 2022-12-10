import React, { useState } from "react";
import PlaySquare from "./PlaySquare";
import "../App.css";

const GameBoard = () => {
  const [playSquare, setPlaySquare] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);

  const winner = determineWinner(playSquare);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = (x ? "x" : "o") + "'s turn!";
  }

  const renderPlaySquare = (i) => {
    return <PlaySquare value={playSquare[i]} onClick={() => handleClick(i)} />;
  };

  const handleClick = (i) => {
    const playSquares = playSquare.slice();
    if (playSquares[i] === null) {
      playSquares[i] = x ? "x" : "o";
      setPlaySquare(playSquares);
      setX(!x);
    } else {
      alert("Cannot carry out this move!");
    }
  };

  function determineWinner(playSquares) {
    //winning moves - ways to get three in a row
    const squareRows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < squareRows.length; i++) {
      //0,1,2 loop, 3, 4, 5 etc
      const [a, b, c] = squareRows[i];
      //check value of positions

      if (
        playSquares[a] &&
        playSquares[a] === playSquares[b] &&
        playSquares[a] === playSquares[c]
      ) {
        return playSquares[a];
      }
    }
    return null;
  }

  return (
    <div className="GameBoard">
      <div className="gameBoardRows">
        {renderPlaySquare(0)}
        {renderPlaySquare(1)}
        {renderPlaySquare(2)}
      </div>
      <div className="gameBoardRows">
        {renderPlaySquare(3)}
        {renderPlaySquare(4)}
        {renderPlaySquare(5)}
      </div>
      <div className="gameBoardRows">
        {renderPlaySquare(6)}
        {renderPlaySquare(7)}
        {renderPlaySquare(8)}
      </div>

      <h2>{status}</h2>
    </div>
  );
};

export default GameBoard;
