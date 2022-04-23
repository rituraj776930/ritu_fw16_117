import React, { useState } from 'react'

function Todo({todo , deltodo , onEdit}) {
    const [editable , seteditable] = useState(false)
    const [value , setvalue] = useState(todo.value)
    const deletetodo = async()=>{
        let response = await fetch(`http://localhost:3000/todo/${todo.id}` , {
            method : "DELETE" , 
            headers : {"content-type" : "application/json"}
        })
        let data = await response.json()
        deltodo(todo.id)
    }
    const edittodo = async(value)=>{
        let response = await fetch(`http://localhost:3000/todo/${todo.id}` , {
            method : "PATCH" , 
            headers : {"content-type" : "application/json"},
            body :JSON.stringify({
                value ,
                completed:true
            })
            
        })
         
        let data = await response.json()
        onEdit(data)
    }

  return (
    <>
    {editable ? (<div>
      <input type="text" onChange={(e)=>setvalue(e.target.value)} />
        <button onClick={()=>{
            
            edittodo(value)
            seteditable(false)
            }}>
            UPDATE</button>
      </div>) : (<h1>{todo.value}</h1>)}
    
    <button onClick={()=>deletetodo()}>DELETE</button>
    <button onClick={()=>seteditable(!editable)}>EDIT</button>
    </>
  )
}

export default Todo