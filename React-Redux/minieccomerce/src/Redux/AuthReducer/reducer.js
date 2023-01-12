import * as types from "./actiontypes";

const initialdata = {
    isLoading:false,
    isError:false,
    login:[]
}

export const Authreducer=(state=initialdata,action)=>{
    const {type,payload}=action;
    switch (type) {
        case types.GET_LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        case types.GET_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading:true,
                isError:false,
                login:payload
            }
        case types.GET_LOGIN_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
            default:
                return state
    }
}