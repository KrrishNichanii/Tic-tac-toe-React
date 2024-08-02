import React from 'react'

function Modal({winner  , resetGame ,isPlayable}) {
  return (
    <div className={`${!winner ? 'hidden' : ''} absolute bg-yellow-600 h-[30rem] w-[30rem] top-[15rem] rounded-lg p-[2rem] flex flex-col justify-center items-center gap-[5rem]`}>
     <p className='text-5xl text center font-bold'>
        {winner != 'Draw' ? `Player ${winner} wins 🎉` : 'Draw 🏳️'}
     </p>
     <button 
     className='bg-[#B41F20] px-5 py-3 text-xl text-white font-semibold rounded-lg hover:text-[#B41F20] hover:bg-white transition-all duration-500'
    onClick={() => resetGame(winner)}
     >
        New Game
     </button>
    </div>
  )
}

export default Modal