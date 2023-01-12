import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const isAuth = useSelector((store)=>store.AuthReducer?.isAuth);
        console.log(isAuth)
        if(!isAuth){
            return <Navigate to="/login"/>
        }
  return children
}

export default Private