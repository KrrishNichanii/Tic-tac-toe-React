import React, { useState } from 'react'

function Player({player , turn  , playerOp , score}) {

  return (
    <div 
    className={` ${turn == playerOp ? 'bg-green-500' : 'bg-[#DD500D]'} h-[13.5rem] w-[13.5rem] rounded-[2.5rem] shadow-md 
        ${player == 1 ? 'rounded-tl-none': 'rounded-tr-none'} flex flex-col gap-[1rem] justify-center   items-center p-4`}
    >
        <h1 className='text-3xl font-bold text-center'>Player {player} SCORE</h1>
         <p className='text-white font-bold text-6xl'>{score}</p>
    </div>
  )
}

export default Player