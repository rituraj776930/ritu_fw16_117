// Write code for Registration context
import React, { useContext, useReducer, useState } from 'react'
import { AuthContext } from './AuthContext'
import { initState, Reducer } from './registerReducer'

export const RegistrationContext = React.createContext()



const RegistrationContextProvider = ({children})=>{
    const [state, dispatch] = useContext(AuthContext)
    return (
        <RegistrationContext.Provider value={[state, dispatch]}>{children}</RegistrationContext.Provider>
    )
}
export default RegistrationContextProvider
