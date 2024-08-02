import React, { useState } from 'react'
import Grid from './Grid'
import Player from './Player';
import Modal from './Modal';

function Home() {
    const [board, setBoard] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
    const [turn , setTurn] = useState('X') ; 
    const [currPlayer , setCurrPlayer] = useState(0) ; 
    const [player1 , setPlayer1] = useState('') ; 
    const [player2 , setPlayer2] = useState('') ; 
    const [isPlayable ,setIsPlayable] = useState(false) ; 
    const [winner , setWinner] = useState('') ; 
    const [score1 , setScore1]  = useState(0) ; 
    const [score2 , setScore2]  = useState(0) ; 

    const startGame = (firstPlayer) => {
         setCurrPlayer(firstPlayer) ; 
         if(firstPlayer == 1){

            setPlayer1('X') ; 
            setPlayer2('O')
         }
         else{
            setPlayer1('O') ; 
            setPlayer2('X') ; 
         } 
         setIsPlayable(true) ; 
    }

    const declareWinner = (winner) => {
         console.log(winner , ' wins');
         if(winner == player1) setWinner('1') ; 
         if(winner == player2) setWinner('2') ; 
    }

    const resetGame = (winner) => {
       if(winner == '1')  setScore1(state => state+1) ; 
       if(winner == '2')  setScore2(state => state+1) ;
       setCurrPlayer(0) ; 
       setWinner('') ; 
       setIsPlayable(false) ;
       setPlayer1('');
       setPlayer2('');
       setTurn('X') ;  
       setBoard([["", "", ""], ["", "", ""], ["", "", ""]]) ; 
    }

    const handleDraw = () => {
       setWinner('Draw')
    }

  return (
    <div className='h-screen w-full bg-[#B41F20] flex  items-center'>

        <div className="relative  w-[70%] h-[80%] mx-auto p-[2rem] flex flex-col items-center justify-between">
            <div className="shadow-lg w-[50%] bg-[#DD500D] h-[3rem] p-4 rounded-[2rem] flex justify-around items-center">
                {
                    currPlayer == 0 ? (
                    <>
                        <div className="hover:bg-[#9E3901] rounded-lg px-3 py-1 text-white text-xl font-semibold cursor-pointer" onClick={() =>startGame(1)}>Player 1 start</div>
                        <div className="hover:bg-[#9E3901] rounded-lg px-3 py-1 text-white text-xl font-semibold cursor-pointer" onClick={() => startGame(2)}>Player 2 start</div>
                    </>
                    )
                    :
                    (
                        <>
                            <div className="text-white text-xl font-semibold"> Player 1 : {player1}</div>
                            <div className="text-white text-xl font-semibold"> Player 2 : {player2}</div>   
                        </>
                    )
                }
            </div>
                 
            <div className="flex justify-between w-full items-center">
                <Player score={score1}  player={1} turn={turn} playerOp = {player1} />

                <Grid 
                turn={turn}
                setTurn = {setTurn}
                declareWinner = {declareWinner}
                isPlayable={isPlayable}
                setIsPlayable={setIsPlayable}
                board={board}
                setBoard={setBoard}
                handleDraw={handleDraw}
                />

                <Player score={score2}  player = {2} turn={turn} playerOp = {player2}  />
            </div>

            <Modal resetGame={resetGame} isPlayable={isPlayable} winner={winner}/>
        </div>
    </div>
  )
}

export default Home