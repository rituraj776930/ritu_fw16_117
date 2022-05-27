import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

const initState = {
    data:[],
    loading:false,
    error:false
}
const gitActions = {
    success : "success",
    failure : "failure"
}
const ReducerGit = (state , action)=>{
    switch (action.type){
        case gitActions.success:{
            return{
                ...state , 
                data:action.payload,
                loading:true
            }
        }
        case gitActions.failure:{
            return{
                ...state , 
                error:true
            }
        }
        default:
        return state
    }
}
function GithubReducer() {
    const [{data , loading , error} , dispatch] = useReducer(ReducerGit , initState)
    useEffect(()=>{
        axios.get("https://reqres.in/api/users")
        .then((res)=>{
            dispatch({
                type:gitActions.success ,
                payload:res.data.data
            })
        })
        .catch(()=>{
            dispatch({type:gitActions.failure})
        })
    },[])
  return (
    <div>
        <h1>Users Page</h1>
        {data?.map((item)=>{
            return(
                <>
                <img src={item.avatar} alt="" />
                <h3>{item.first_name}</h3>
                <h3>{item.last_name}</h3>
                </>
            )
        })}
    </div>
  )
}

export default GithubReducer