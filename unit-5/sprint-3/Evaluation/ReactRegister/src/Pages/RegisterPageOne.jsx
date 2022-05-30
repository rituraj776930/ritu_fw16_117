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
            <label style={{color:"purple" , fontWeight:"bold",fontSize:"20px"}}>User:</label>
            <input style={{width:"200px" , height:"19px" , borderRadius:"20px" , backgroundColor:"orange"}} type="text" onChange={(e)=>setuser(e.target.value)}/>
            <br />
            <br />
            <label style={{color:"purple" , fontWeight:"bold",fontSize:"20px"}}>Email:</label>
            <input style={{width:"200px" , height:"19px" , borderRadius:"20px" , backgroundColor:"orange"}} type="text" onChange={(e)=>setemail(e.target.value)}/>
            <br />
            <br />
            <input style={{width:"100px" , height:"24px" , borderRadius:"20px" , backgroundColor:"purple" , color:"white"}} type="submit"/>
        </form>
        <br />
        {flag ? <button style={{width:"100px" , height:"24px" , borderRadius:"20px" , backgroundColor:"purple" , color:"white" ,textDecoration:"none"}}><Link style={{color:"white" , textDecoration:"none"}} to="/register/two">NEXT</Link></button> : <div></div>}
    </div>
  )
}

export default RegisterPageOne