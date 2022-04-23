import React, { useState } from 'react'

function AddTodo({addTodo}) {
    const [task , settask] = useState("")
    const handleChange = (e)=>{
        settask(e)
    }

    const postTodo = async(value)=>{
        let response = await fetch("http://localhost:3000/todo" , {
            method : "POST" , 
            headers:{"content-type" : "application/json"} , 
            body:JSON.stringify({
                value , 
                completed:false
            })
        }) 
        let data = await response.json()
        console.log(data)
        addTodo(data)
        
    }

    return (
      <>
      <input type="text" onChange={(e)=>handleChange(e.target.value)} />
        <button onClick={()=>postTodo(task)}>ADD TODO</button>
      </>
    )
  }

export default AddTodo