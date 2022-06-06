import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateAuth from '../Components/PrivateAuth'
import Home from './Home'
import Posts from './Posts'

function AllRoutes() {
    
  return (
    <div>
        <Routes>
            <Route path ='/' element={<Home/>} />
            <Route path ='/posts' element={
                <PrivateAuth>
            <Posts/>
            </PrivateAuth>
            } />
        </Routes>
    </div>
  )
}

export default AllRoutes