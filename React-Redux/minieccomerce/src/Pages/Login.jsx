import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import "./Signup.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getlogindata } from "../Redux/AuthReducer/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch()
    const [login,setLogin]=useState();
    const [data,setData]=useState([]);
    const navigate = useNavigate()

    // const userdata = useSelector((store)=>store.Authreducer)
    // console.log(userdata)

    useEffect(()=>{
        axios("https://mock-server-app-usedata.onrender.com/Data")
        .then((res=>setData(res.data)))
    },[])
    // console.log(data)
    const handlechange=(e)=>{
        const {name,value}=e.target

        setLogin({...login,[name]:value})
    }
    const handlelogin=()=>{
        // console.log(login.email)
        
        const email=data && data.find((el)=>{
            return el.email===login.email
        })
        console.log(email.password)
        if(email){
           if(email.password==login.password){
            alert("Login Successful")
            navigate("/information")
           }
           else{
            alert("Please Enter Valid Credential")
           }
        }
        else{
            alert("Please Enter Valid Credential")
        }
    }
    

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
    };

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };

    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook" onClick={facebook}>
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="email" placeholder="Username" name="email" required onChange={(e)=>handlechange(e)} />
                    <input type="password" placeholder="Password" name="password" required onChange={(e)=>handlechange(e)} />
                    <button className="submit" onClick={handlelogin}>Login</button>
                    <div>
                        <p>SignUP Here... <a href="/signup">Link</a></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;
