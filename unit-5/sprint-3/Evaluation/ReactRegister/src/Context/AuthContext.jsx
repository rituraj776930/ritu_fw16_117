import React, { useReducer, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { initState, Reducer } from './registerReducer'

export const AuthContext = React.createContext()

const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(Reducer , initState)
    return (
        <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>
    )

}
export default AuthContextProvider