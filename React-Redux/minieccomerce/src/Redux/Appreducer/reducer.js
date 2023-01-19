import * as types from "./actionTypes";

const initialdata = {
    isLoading: false,
    isError: false,
    product: [],
    cart:[]
}

const Appreducer = (state = initialdata, action) => {
    const { type, payload,cart } = action;
    switch (type) {
        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: true,
                isError: false,
                product: payload
            }
        case types.GET_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case types.ADD_CART:
            const iteamIndex =state.cart.findIndex((item)=>item.id === cart.id);

            if(iteamIndex >=0){
                state.cart[iteamIndex].quantity +=1;
                return {
                    ...state,
                    cart:[...state.cart]
                }
            }
            else{
                const temp = {...action.cart,quantity:1}
                return{
                    ...state,
                    cart: [...state.cart,temp]
                }
            }
        case types.ITEM_DELETED:
            const data =state.cart.filter((el)=>el.id !== action.cart);
            console.log("reducerdelet",data)
            return {
                ...state,
                cart: data
            }


        case types.REMOVE_ITEM:
            const IteamIndex_dec = state.cart.findIndex((iteam)=> iteam.id ===action.cart.id);
            
            if(state.cart[IteamIndex_dec].quantity>=1){
                const dltiteams = state.cart[IteamIndex_dec].quantity -= 1
                console.log([...state.cart, dltiteams]);

                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            else if (state.cart[IteamIndex_dec].quantity === 1) {
                const data = state.cart.filter((el) => el.id !== action.cart.id);

                return {
                    ...state,
                    cart: data
                }
            }
        default: {
            return state;
        }

    }
}

export default Appreducer