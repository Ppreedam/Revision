import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getlogindata, postlogindata } from "../Redux/AuthReducer/action";
import "./Login.css"

const initaildata = {
    name: "",
    email:"",
    password: ""
}

const Login = () => {
    const [user,setUser]=useState([])
    const [data, setData] = useState(initaildata);
    // const [useremail, setUseremail]=useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const userdata = useSelector((store)=>store)
    // console.log(userdata);

    useEffect(()=>{
        axios("https://mock-server-app-usedata.onrender.com/Data")
        .then((res=>setUser(res.data)))
    },[])

    // console.log(user)

    function changehandle(e) {
        const { value } = e.target
        const { name } = e.target
        setData({ ...data, [name]: value })

    }
    function handledata() {
        console.log(data.email)
        const email=user && user.find((el)=>{
            return el.email===data.email
        })
        // console.log(email)
        if(data.email.includes("@" && ".com") && data.password.length>=8 ){
            if(!email){
                dispatch(postlogindata(data))
                alert("user successful registered")
                navigate("/login")
            }
            else{
                alert("user Already exist")
            }
            // alert("Succes")
        }
        else{
            alert("Please Check Email Password")
        }
        
        

    }

    return (
        <div className="signup">
            <h1 className="signupTitle">SignUp Method</h1>
            <div className="signupwrapper">
                <div className="signupright">
                    <input type="text" placeholder="Username" name="name" onChange={(e) => changehandle(e)} />
                    <input type="email" placeholder="Email" name="email" onChange={(e) => changehandle(e)} />
                    <input type="text" placeholder="Password" name="password" onChange={(e) => changehandle(e)} />
                    <button className="Signupsubmit" onClick={handledata}>SignUp</button>
                    <div>
                        <p>Go to LoginPage... <a href="/login">Link</a></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;
