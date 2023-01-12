import * as types from "./actionTypes";
import axios from "axios";

export const postData=(data)=>(dispatch)=>{
    // console.log(data)
    dispatch({type:types.GET_DATA_REQUEST});
    axios.post('https://mock-json.onrender.com/dogs',data).
    then((res)=>{
        // console.log(res)
        localStorage.setItem("res",JSON.stringify(res))
        dispatch({type:types.GET_DATA_SUCCESS,payload:res})
    }).catch((e)=>{
        dispatch({type:types.GET_DATA_ERROR})
    })
}

export const getData=()=>(dispatch)=>{
    // console.log(data)
    dispatch({type:types.GET_DATA_REQUEST});
    axios.get('https://mock-json.onrender.com/dogs').
    then((res)=>{
        // console.log(res.data)
        dispatch({type:types.GET_DATA_SUCCESS,payload:res})
    }).catch((e)=>{
        dispatch({type:types.GET_DATA_ERROR})
    })
}
export const Deletdata=(id)=>(dispatch)=>{
    console.log(id)
    dispatch({type:types.GET_DATA_REQUEST});
    axios.delete(`https://mock-json.onrender.com/dogs/${id}`).
    then((res)=>{
        console.log(res.data)
        dispatch({type:types.GET_DATA_SUCCESS,payload:res})
    }).catch((e)=>{
        dispatch({type:types.GET_DATA_ERROR})
    })
}

export const EditDataaction=(id,data)=>(dispatch)=>{
    console.log(id.id,data)
    dispatch({type:types.GET_DATA_REQUEST});
    axios.put(`https://mock-json.onrender.com/dogs/${id.id}`,data).
    then((res)=>{
        // console.log(res)
        localStorage.setItem("res",JSON.stringify(res))
        dispatch({type:types.GET_DATA_SUCCESS,payload:res})
    }).catch((e)=>{
        dispatch({type:types.GET_DATA_ERROR})
    })
}

