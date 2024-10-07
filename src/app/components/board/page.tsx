"use client"

import React from "react";
import Square from "../square/page";

export default function Board({square, onPlay, next} : {square: string[], onPlay: any, next: boolean}) {

  const handleClick = (i:number) => {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice(); 
    if (next) { 
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare)
  }

  let status;
  if (calculateWinner(square)) {
    status = 'Winner:' + calculateWinner(square);
  } else {
    status = 'Next player:' + (next ? 'X' : '0');
  }

  return <div className="board">
    <div className="status">{status}</div>
    <div className="wrapper">
    <Square value={square[0]} handleclick = {()=>{handleClick(0)}} />
    <Square value={square[1]} handleclick = {()=>{handleClick(1)}} />
    <Square value={square[2]} handleclick = {()=>{handleClick(2)}} />
    </div>
    <div className="wrapper">
    <Square value={square[3]} handleclick = {()=>{handleClick(3)}} />
    <Square value={square[4]} handleclick = {()=>{handleClick(4)}} />
    <Square value={square[5]} handleclick = {()=>{handleClick(5)}} />
    </div>
    <div className="wrapper">
    <Square value={square[6]} handleclick = {()=>{handleClick(6)}} />
    <Square value={square[7]} handleclick = {()=>{handleClick(7)}} />
    <Square value={square[8]} handleclick = {()=>{handleClick(8)}} />
    </div>
  </div>;
}

const calculateWinner = (square: string[]) => {
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
    const [a,b,c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}