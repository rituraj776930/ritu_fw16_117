import React, { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()

const AuthContextProvider = ({children})=>{
    const [token , settoken] = useState("")
    const [auth , setauth] = useState(false)
    const isAuth = (email,password)=>{
        axios.post("https://reqres.in/api/login",{
            email:email,
            password:password
        })
        .then((res)=>{
            settoken(res.data.token)
            setauth(true)
        })
        .catch((err)=>{
            console.log("error")
        })
        .finally(()=>{
            
        })
    }
    return <AuthContext.Provider value={[token , settoken , isAuth , auth,setauth]}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider