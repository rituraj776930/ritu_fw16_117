import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter:{count}</h1>
        <br />
        <button onClick={()=>dispatch({type:"Increment"})}>Add</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Reduce</button>
    </div>
  )
}

export default Counter