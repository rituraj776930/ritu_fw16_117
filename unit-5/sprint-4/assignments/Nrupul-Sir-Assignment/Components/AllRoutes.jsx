import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'

function AllRoutes() {
  return (
    <div>
        
        <Routes>
            <Route path="/" element={<Main/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes