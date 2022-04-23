import React from 'react'

function Timer({initime , endtime , setinitime , setendtime}) {
    const speed = ()=>{
        if(initime == endtime){
            clearInterval(id)
        }
        setTimeout(()=>{
            setinitime(initime+1)
        } , 1000)
    }
    speed()
  return (
      <>
      <h1>Timer</h1>
        <h1>Start time : {initime} seconds</h1>
        <h1>End time : {endtime} seconds</h1>
      </>
    
  )
}

export default Timer