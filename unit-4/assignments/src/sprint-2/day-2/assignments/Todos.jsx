import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'


function Todos() {
const [todo , settodo] = useState([])      
const [page , setpage] = useState(1)
const addTodo = (task)=>{
  settodo([...todo , task])
}
const delTodo = (id)=>{
    let newTodo = todo.filter((todo)=> todo.id != id)
    settodo(newTodo)
  }
  const onEdit = (newTodo)=>{
    const newTodos = todo.map((todo)=>{
        if(todo.id === newTodo.id) return newTodo
        else return todo
    })
    settodo(newTodos)
  }
const getdata = async()=>{
    try {
        let response = await fetch(`http://localhost:3000/todo?_page=${page}`)
        let data = await response.json()
        console.log(data)
        settodo(data)
        
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    getdata()
},[..])


  return (
    <>
    <h1>ADD YOUR TODO</h1>
    <AddTodo addTodo ={addTodo} />
    {todo.map(function(elem){
        return (
            <Todo key={elem.id} todo = {elem} deltodo = {delTodo} onEdit = {onEdit}  />
        )
      
    })}
    <hr />
    <div>
    <button onClick={()=>setpage(page-1)}>Previous</button>
    <button onClick={()=>setpage(page+1)}>Next</button>
    </div>
    
    </>
    
  )
}


export default Todos
