import React from 'react'
import CrosswordComponent from '../../components/GameComponents/crossword'

const Game = () => {
  return (
    <div>
      <div className='flex justify-center text-2xl font-bold'>CrossWord Game</div>
      <div className='flex justify-center'>
        <CrosswordComponent />
      </div>
    </div>
  )
}

export default Game; 