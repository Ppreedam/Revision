import * as types from "./actionType"
import axios from "axios";






const login=(payload)=>(dispatch)=>{
  console.log(payload)
    dispatch({type:types.LOGIN_LOADDING})
    return axios.post("https://reqres.in/api/login",payload)
    .then((res)=>{
     
      return dispatch({type:types.LOGIN_SUCCESS,
      payload:res.data.token
      })
      
    }).catch((err)=>{
      return dispatch({type:types.LOGIN_ERROR,
      payload:err.message
      })
     
    })
}

export {
   login
}