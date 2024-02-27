import React from 'react'


function Score({selectNumber,setSelectNumber,score,error,setError}) {
  
 
  
 
  const arr=[1,2,3,4,5,6]
  
 
  return (
   <>
     <main>
    <div className='score_details'>
      <h2>{score}</h2>
      <p>Total Score</p>
      </div>
     <h4>{error}</h4>
      <p className='p'>Select a Number</p>
      <div className='boxes'>
     
     
        {
arr.map((value,i)=>{
  return(selectNumber===value?<box key={i} style={{backgroundColor:'black',color:'white'}} onClick={()=>{setSelectNumber(value);setError('')}}>{value}</box>:
  <box key={i} style={{backgroundColor:'white',color:'black'}} onClick={()=>{setSelectNumber(value);setError('')}}>{value}</box>)
})
        }
      </div>
   
  
</main>

   </>

  )
  
}

export default Score