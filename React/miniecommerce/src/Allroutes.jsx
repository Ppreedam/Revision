import React from 'react'

import {Routes, Route} from "react-router-dom"
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import SinglePage from './Pages/SinglePage'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/SinglePage/:id' element={<SinglePage/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes