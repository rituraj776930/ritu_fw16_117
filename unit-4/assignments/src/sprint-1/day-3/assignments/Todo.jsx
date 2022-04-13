import React, { useState } from 'react'
import TodoList from './TodoList'


export default function Todo() {
    const [task , settask] = useState("")
    const [todo , settodo] = useState([])
    const handleChange = (e)=>{
        settask(e)
    }
    const handleClick = ()=>{
        settodo([...todo , task])
    }
  return (
    <>
    <input type="text"  placeholder='Enter Todo' onChange={(e)=>handleChange(e.target.value)} />
    <button onClick={()=>handleClick()}>ADD TODO</button>
    <TodoList todos = {todo}/>
    </>
  )
}
