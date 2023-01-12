import * as types from "./actionTypes";
import axios from "axios";

export const getData =()=>(dispatch)=>{
  dispatch({type:types.GET_DATA_REQUEST});
  axios(`https://dummyjson.com/products?limit=${12}&skip=${0}`)
  // .then((res)=>res.json())
  .then((res)=>{
    // console.log(res)
    dispatch({type:types.GET_DATA_SUCCESS,payload:res.data});
  })
  .catch((err)=>{
    dispatch({type:types.GET_DATA_ERROR});
  })

}


export const Addtocart = (item)=>(dispatch)=>{
  dispatch({type:types.ADD_CART,cart:item})
}
export const deletitemaction =(id)=>(dispatch)=>{
  dispatch({type:types.ITEM_DELETED,cart:id})
  // console.log("action",id)
}

export const Remove = (item)=>(dispatch)=>{
    
  dispatch({type:types.REMOVE_ITEM,cart:item})
}


