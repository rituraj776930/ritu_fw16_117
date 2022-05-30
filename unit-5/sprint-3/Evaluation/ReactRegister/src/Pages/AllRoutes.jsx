import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import RegisterPageOne from './RegisterPageOne'
import RegisterPageTwo from './RegisterPageTwo'

function AllRoutes() {
  return (
    <div>
        <h1>Hello</h1>
        <Link to="/register/one"><h3>Click here for Registration</h3></Link>
        <Routes>
            <Route path="/register/one/*" element={<RegisterPageOne/>}/>
            <Route path="/register/two/*" element={<RegisterPageTwo/>} />
            <Route path="/dashboard/*" element={
                <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            }
            />
        </Routes>
    </div>
  )
}

export default AllRoutes