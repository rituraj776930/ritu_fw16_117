import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { failure, loading, loading22, success } from '../Redux/auth/action'
import { Link, Navigate } from 'react-router-dom'

function Home() {
    const [flag,setflag] = useState(false)
  const token = useSelector((state)=>state.auth.token)
  const load = useSelector((state)=>state.auth.loading)
  const fail = useSelector((state)=>state.auth.failure)
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const dispatch = useDispatch()


  const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(loading())
      const payload ={
          email:email,
          password:password
      }
      axios({
          method:"POST",
          url:"https://reqres.in/api/login",
          data:payload
      })
      .then((res)=>res.data.token)
      .then((data)=>{
          setflag(true)
          console.log(data)
          dispatch(success(data))
          dispatch(loading22())
      })
      .catch((error)=>{
          dispatch(failure())
          dispatch(loading22())
      })
  }
  return (
    <div>
        <h1>Welcome to Home Page</h1>
        <h3>Click here to login</h3>
        {load ? <h3>...loading</h3> : <div></div>}
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="text" onChange={(e)=>setemail(e.target.value)} />
            <br />
            <label>Password:</label>
            <input type="text" onChange={(e)=>setpassword(e.target.value)} />
            <br />
            <input type="submit" />
        </form>
        {fail ? <h3>...failure</h3> : <div></div>}
        {flag && <Link to="/posts">Go to Post Page</Link>}
    </div>
  )
}

export default Home