import React from 'react'

function Cell({char , onMark , rowIdx , colIdx}) {
  return (
     <div 
     className="bg-[#9E3901] rounded-[3.5rem] flex justify-center items-center text-7xl text-white"
     onClick={() => onMark(rowIdx , colIdx)}
     >
        {char}
    </div>
  )
}

export default Cell