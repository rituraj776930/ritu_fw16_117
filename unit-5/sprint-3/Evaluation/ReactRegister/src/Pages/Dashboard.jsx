import React, { useContext } from 'react'
import { RegistrationContext } from '../Context/RegistrationContextProvider'

function Dashboard() {
    const [state,dispatch] = useContext(RegistrationContext)
  return (
    <div>
        <h1>Dashboard</h1>
        <h2>user:{state.user}</h2>
        <h2>email:{state.email}</h2>
        <h2>address:{state.address}</h2>
        <h2>number:{state.number}</h2>
    </div>
  )
}

export default Dashboard


