import React from 'react'

function StartGame({toggleGame}) {
    const url='https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=600'
  return (
    <container>
        <div>
            <img src={url}/>
        </div>
        <div className='details'>
            <h1>Dice Game</h1>
            <button onClick={toggleGame}>Play now</button>
        </div>
    </container>
  )
}

export default StartGame