import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ='/welcome' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router