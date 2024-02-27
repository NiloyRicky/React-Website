import React,{useState} from 'react'
import Score from './Score'
import RollDice from './RollDice'

function GamePlay() {
  const[selectDice,setSelectDice]=useState()
  const[selectNumber,setSelectNumber]=useState()
  const[score,setScore]=useState(0)
  const[error,setError]=useState()


  const randomNumber=(min,max)=>{
    console.log( Math.floor(Math.random()*(max-min))+min)
   
    return Math.floor(Math.random()*(max-min))+min
  }
  const rollDice=()=>{
    if(!selectNumber) {
      setError('First select a number')
      return}else{setError('')}
    const Number=randomNumber(1,7)
    setSelectDice(Number)
    if(selectNumber===Number){
setScore(score+Number)

    }
    else{setScore(score-2)}
    setSelectNumber()
  }
 
  return (
    <>
      <Score selectNumber={selectNumber} setSelectNumber={setSelectNumber} score={score} error={error} setError={setError}/>
      <RollDice selectDice={selectDice} rollDice={rollDice}/>
      <button className='reset_btn' onClick={()=>setScore(0)}>Resest</button>
    
    </>
    
  )
}

export default GamePlay