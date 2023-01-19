import React, { useState } from 'react'
import { useEffect } from 'react';
import "./Information.css";

const Information = () => {
    const [data, setData]=useState();
    const [random, setRandom]=useState();
    

    useEffect(()=>{
        var randomnumber =("" + Math.random()).substring(2, 6)
        // console.log(randomnumber)
        setRandom(randomnumber)
    },[])
    // console.log(random)
    function handlechange(e){
        setData(e.target.value)
    }
    function handleverification(){
        if(data==random){
            alert("Checkout Successful")
            window.location.reload()
        }
        else{
            alert("Please Enter Valid OTP")
        }
    }
  return (
    <>
        <div className='container1'>
        <h1>ENTER OTP</h1>
        <div className='userInput'>
            <button className='otpbutton'
            >{random}</button>
            <input type="password" onChange={(e)=>handlechange(e)}/>
        </div>
        <button className='verify' onClick={handleverification}>Verify</button>
        </div>
    </>
  )
}

export default Information