import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Private from './Components/Private';
import Admin from './Pages/Admin';
import Data from './Pages/Data';
import Editdata from './Pages/Editdata';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Report from './Pages/Report';
import UserSection from './Pages/UserSection';

const Allroutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/user" element={<UserSection/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path='/data' element={
                // <Private>
                <Data/>
                // </Private>
                }/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/report' element={<Report/>}/>
                <Route path='/edit/:id' element={<Editdata/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Allroutes