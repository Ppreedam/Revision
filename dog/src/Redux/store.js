 import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import Appreducer from "./reducer"
import thunk from "redux-thunk"
import AuthReducer from "./AuthReducer/authreducer";



const rootreducer =combineReducers({Appreducer,AuthReducer})
 const store = legacy_createStore(rootreducer,applyMiddleware(thunk));
 export default store;