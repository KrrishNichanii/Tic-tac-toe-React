import React, { useEffect, useState } from 'react'
import Cell from './Cell';

function Grid({turn , setTurn , declareWinner ,isPlayable ,setIsPlayable ,board , setBoard , handleDraw}) {
    

    const onMark = (i, j) => {
        console.log(isPlayable);
      if (!isPlayable) return;
      if (board[i][j]) return; // return if cell already marked
  
      setBoard(state => {
        const newBoard = state.map(row => [...row]); 
        newBoard[i][j] = turn;
        return newBoard;
      });
      
      setTurn(state => state === 'X' ? 'O' : 'X');
    }

    function isDraw(board){
        let cnt= 0 ;
        // console.log(board[0]);
        if(board)
        for(let i=0;i<3;i++) for(let j=0;j<3;j++) if(board[i][j])  cnt++ ;
        return cnt == 9 ? true : false ; 
    }

    useEffect(() => {
      const winner = isWin(board);
      if (winner) {
        setIsPlayable(false);
        declareWinner(winner);
      }
      if(isDraw(board)){
        setIsPlayable(false);
        handleDraw() ; 
      }
    }, [board]);
  
    function isWin(board) {
      const allEqual = arr => arr.every(v => v === arr[0] && v !== "");
  
      // Check rows
      for (let i = 0; i < 3; i++) {
        if (allEqual(board[i])) {
          return board[i][0]; 
        }
      }
  
      // Check columns
      for (let j = 0; j < 3; j++) {
        if (allEqual([board[0][j], board[1][j], board[2][j]])) {
          return board[0][j]; 
        }
      }
  
      // Check diagonals
      if (allEqual([board[0][0], board[1][1], board[2][2]])) {
        return board[0][0]; 
      }
      if (allEqual([board[0][2], board[1][1], board[2][0]])) {
        return board[0][2]; 
      }
  
      return null; // No winner yet
    }

  return (
    <div className="shadow-lg w-[30rem] h-[30rem] bg-[#D8AA89] rounded-[4rem] grid grid-cols-3 grid-rows-3 p-[2rem] gap-[2rem]">
      {
         
            board.map((row, rowIndex) =>
              row.map((cell, cellIndex) => 
              <Cell 
                rowIdx = {rowIndex} 
                colIdx = {cellIndex} 
                key={`${rowIndex}-${cellIndex}`} 
                char={board[rowIndex][cellIndex]}
                onMark={onMark}
              />)
            )
      }
    </div>
  )
}

export default Grid