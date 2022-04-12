import React, { useState } from 'react'

export default function Counter() {
    const [count , setcount] = useState(0)
    const handleClick = (value)=>{
        setcount(count+value)
    }
    const handleDouble = ()=>{
        setcount(count*2)
    }
  return (
      <>
      <h1 style={{color : count%2==0 ? "green" : "red"}}>COUNTER</h1>
        <h1>{count}</h1>
        <button onClick={()=>handleClick(-1)}>DECREMENT</button>
        <button onClick={()=>handleClick(1)}>DECREMENT</button>
        <button onClick={()=>handleDouble()}>DOUBLE</button>
      </>
    
  )
}
