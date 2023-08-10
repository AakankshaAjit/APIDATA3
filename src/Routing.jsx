import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import List from './Screens/List'


const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/List/:id' element={<List/>}/>
        

        </Route>

    </Routes>
    
    </BrowserRouter>
  )
}

export default Routing