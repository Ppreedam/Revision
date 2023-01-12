import * as types from "./actionType"

const initial={
    isAuth:false,
      token:""
}

const AuthReducer=(state=initial,action)=>{
    const {type,payload}=action;
  
    switch(type){
       case types.LOGIN_LOADDING :{
        return{
            ...state,
            isAuth:false,
            token:""
        }
       }
       case types.LOGIN_SUCCESS:{
        return{
            ...state,
            isAuth:true,
            token:payload
        }
       }
       case types.LOGIN_ERROR :{
        return{
              ...state,
              isAuth:false,
              token:payload
        }
       }
       default:{
        return state
       }
    }
}
export default AuthReducer;