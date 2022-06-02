import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { postData } from '../redux/action';

function TodoInput() {
    const [task,settask] = useState("")
    const dispatch = useDispatch()
    const handleClick=()=>{
        const payload={
            id:uuidv4(),
            title:task
        }
        postData(dispatch,payload)
    }
  return (
    <div>
        <input type="text" onChange={(e)=>settask(e.target.value)} />
        <button onClick={()=>handleClick()}>Add Todo</button>
    </div>
  )
}

export default TodoInput