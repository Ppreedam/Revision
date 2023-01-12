import * as types from "./actionTypes"

const initialdata ={
    isLoading:false,
    isError:false,
    product:[]
}

const Appreducer =(state=initialdata,action)=>{
    const {type,payload} =action;
    switch (type) {
        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        case types.GET_DATA_SUCCESS:
            return{
                ...state,
                isLoading:true,
                isError:false,
                product:payload
            }
            case types.GET_DATA_ERROR:
                return{
                    ...state,
                    isLoading:false,
                    isError:true,
                    product:[]
                }
        default:{
            return state
        }
            
    }
}

export default Appreducer