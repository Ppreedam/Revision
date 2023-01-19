import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Information from '../Pages/Information';
import Login from '../Pages/Login';
import Product from '../Pages/Product';
import SignUp from '../Pages/SignUp';
import SinglePage from '../Pages/SinglePage';

const Allroutes = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                    setUser(resObject.user);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
    }, []);
    // console.log(user)
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/productDetails/:id' element={<SinglePage />} />
                <Route path='/information' element={user ? <Information /> : <Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default Allroutes