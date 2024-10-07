"use client"

import React from "react";
import Board from "./components/board/page";

export default function Game() {
  const [square, setSquare] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const next = currentMove % 2 === 0;
  console.log(square)

  const currentSquare = square[currentMove];
  console.log("This is cs",currentSquare)

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  }

  const moves = square.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const handlePlay = (nextSquare : string[]) => {
    const lastSquare = [...square.slice(0,currentMove + 1), nextSquare]
    setSquare(lastSquare);
    setCurrentMove(lastSquare.length - 1)
  }
  return <div>
    <Board square={currentSquare} next={next} onPlay={handlePlay} />
    {moves}
  </div>
}