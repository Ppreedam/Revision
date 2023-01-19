import React from 'react'
import {Routes,Route} from "react-router-dom";
import AddDetails from '../Pages/AddDetails';
import PrintDl from '../Pages/PrintDl';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AddDetails/>}/>
            <Route path='/print' element={<PrintDl/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes