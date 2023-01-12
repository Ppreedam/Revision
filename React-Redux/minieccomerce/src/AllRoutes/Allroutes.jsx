import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Information from '../Pages/Information';
import Login from '../Pages/Login';
import Product from '../Pages/Product';
import SignUp from '../Pages/SignUp';
import SinglePage from '../Pages/SinglePage';

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/productDetails/:id' element={<SinglePage/>}/>
                <Route path='/information' element={<Information/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </div>
    )
}

export default Allroutes