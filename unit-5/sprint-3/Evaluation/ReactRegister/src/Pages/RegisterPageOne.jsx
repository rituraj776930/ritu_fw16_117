import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function RegisterPageOne() {
    const [user , setuser] = useState("")
    const [email,setemail] = useState("")
    const [state,dispatch] = useContext(AuthContext)
    const [flag,setflag] = useState(false)
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(user.length && email.length){
            setflag(true)
            alert("success")
            dispatch({
                type:"register_one",
                payload:{
                    user:user,
                    email:email
                }
            })
        }
        else{
            alert("failure")
        }
    }

  return (
    <div>
        
        <h1>Registration Page 1</h1>
        <form onSubmit={handleSubmit}>
            <label>User:</label>
            <input type="text" onChange={(e)=>setuser(e.target.value)}/>
            <br />
            <label>Email:</label>
            <input type="text" onChange={(e)=>setemail(e.target.value)}/>
            <br />
            <input type="submit"/>
        </form>
        
        {flag ? <button><Link to="/register/two">NEXT</Link></button> : <div></div>}
    </div>
  )
}

export default RegisterPageOne