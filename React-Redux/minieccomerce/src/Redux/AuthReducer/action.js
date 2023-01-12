import axios from "axios"
import * as types from  "./actiontypes"

export const postlogindata =(data)=>(dispatch)=>{
    console.log("action",data)
    dispatch({type:types.GET_LOGIN_REQUEST})
    axios.post("https://mock-server-app-usedata.onrender.com/Data",data)
    .then((res)=>{
        console.log("res",res)
        dispatch({type:types.GET_LOGIN_SUCCESS,payload:res})
    })
    .catch((err)=>{
        dispatch({type:types.GET_LOGIN_ERROR,payload:err})
    })
}
export const getlogindata =()=>(dispatch)=>{
    // console.log("action",data)
    dispatch({type:types.GET_LOGIN_REQUEST})
    axios.post("https://mock-server-app-usedata.onrender.com/Data")
    .then((res)=>{
        // console.log("res",res)
        dispatch({type:types.GET_LOGIN_SUCCESS,payload:res})
    })
    .catch((err)=>{
        dispatch({type:types.GET_LOGIN_ERROR,payload:err})
    })
}