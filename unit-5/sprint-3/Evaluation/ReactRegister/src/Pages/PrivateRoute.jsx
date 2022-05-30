import React, { useContext } from 'react'
import { Navigate} from 'react-router-dom'
import { RegistrationContext } from '../Context/RegistrationContextProvider'

function PrivateRoute({children,to}) {
    const [state,dispatch] = useContext(RegistrationContext)
    console.log(state)
    if(state.user && state.email && state.number && state.address)
        return children
    
  return (
    <Navigate to={"/register/one"}/>
  )
}

export default PrivateRoute