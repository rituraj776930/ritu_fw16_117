import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getData } from '../redux/action'
import TodoInput from './TodoInput'

function Todos() {
    const data = useSelector((state)=>state.todos_data)
    console.log(data)
    const dispatch = useDispatch()
    useEffect(()=>{
        getData(dispatch)
    },[])
  return (
      <>
    <h1>Todos</h1>
    <TodoInput/>
    {data?.map((item,index)=>{
        return(
            <>
            <h3 key={index+1}>{item.title}</h3>
            </>
        )
        
})}
    <button on>Prev</button>
    <button>Next</button>
    </>
  )
}

export default Todos