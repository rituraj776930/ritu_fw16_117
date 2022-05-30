import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { RegistrationContext } from '../Context/RegistrationContextProvider'

function RegisterPageTwo() { const [user , setuser] = useState("")
const [address,setAddress] = useState("")
const [number,setNumber] = useState(null)
const [state,dispatch] = useContext(RegistrationContext)
const navigate = useNavigate()

const handleSubmit=(e)=>{
    e.preventDefault()
    if(address.length && number.length){
        alert("success")
        dispatch({
            type:"register_two",
            payload:{
                address:address,
                number:number
            }
        })
        navigate("/dashboard")
    }
    else{
        alert("failure")
        navigate("/register/one")
    }
}

return (
<div>
    
    <h1>Registration Page 2</h1>
    <form onSubmit={handleSubmit}>
        <label style={{color:"purple" , fontWeight:"bold",fontSize:"20px"}}>Address:</label>
        <input style={{width:"200px" , height:"19px" , borderRadius:"20px" , backgroundColor:"orange"}} type="text" onChange={(e)=>setAddress(e.target.value)}/>
        <br />
        <br />
        <label style={{color:"purple" , fontWeight:"bold",fontSize:"20px"}}>Number:</label>
        <input style={{width:"200px" , height:"19px" , borderRadius:"20px" , backgroundColor:"orange"}} type="text" onChange={(e)=>setNumber(e.target.value)}/>
        <br />
        <br />
        <input style={{width:"100px" , height:"24px" , borderRadius:"20px" , backgroundColor:"purple" , color:"white"}} type="submit"/>
    </form>
    <br />
    
    <button style={{width:"100px" , height:"24px" , borderRadius:"20px" , backgroundColor:"purple" , color:"white"}}><Link style={{color:"white" , textDecoration:"none"}} to="/register/one">PREV</Link></button>
    
</div>
)
}

export default RegisterPageTwo
