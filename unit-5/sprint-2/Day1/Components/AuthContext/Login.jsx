import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContexts'

function Login() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [token , settoken , isAuth , auth, setauth] = useContext(AuthContext)
    const [temp , settemp] = useState("")
    const handleSubmit = ()=>{
        isAuth(email,password)
        setauth(false)
    }
  return (
      <>
    <div>
        
        <label>Email:</label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} /><br/>
        <label>Password:</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
    {auth ? <h1>Token is:{token}</h1> : <h1>Login Unsuccessful</h1>}
    </>
  )
}

export default Login