import React, { useContext } from 'react'
import React, { useContext } from 'react'
import { RegistrationContext } from '../Context/RegistrationContextProvider'

function Dashboard() {
    const [state,dispatch] = useContext(RegistrationContext)
  return (
    <div>
        <h1>Dashboard</h1>
        
        <div style={{display:"flex" , justifyContent:"center" , gap:"13px"}}>
            <h2 style={{color:"purple" , fontWeight:"bold",fontSize:"20px"}}>User:-</h2>
            <h2 style={{color:"red" , fontWeight:"bold",fontSize:"20px"}}>{state.user}</h2>
        </div>
        <div style={{display:"flex" , justifyContent:"center" , gap:"13px"}}>
            <h2 style={{color:"purple" , fontWeight:"bold",fontSize:"20px"}}>Email:-</h2>
            <h2 style={{color:"red" , fontWeight:"bold",fontSize:"20px"}}>{state.email}</h2>
        </div>
        <div style={{display:"flex" , justifyContent:"center" , gap:"13px"}}>
            <h2 style={{color:"purple" , fontWeight:"bold",fontSize:"20px"}}>Address:-</h2>
            <h2 style={{color:"red" , fontWeight:"bold",fontSize:"20px"}}>{state.address}</h2>
        </div> 
        <div style={{display:"flex" , justifyContent:"center" , gap:"13px"}}>
            <h2 style={{color:"purple" , fontWeight:"bold",fontSize:"20px"}}>Number:-</h2>
            <h2 style={{color:"red" , fontWeight:"bold",fontSize:"20px"}}>{state.number}</h2>
        </div>
    
    </div>
  )
}

export default Dashboard



