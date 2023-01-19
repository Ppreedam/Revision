import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { Authreducer } from "./AuthReducer/reducer";
import Appreducer from "./Appreducer/reducer";
import thunk from "redux-thunk";

const rootreducer = combineReducers({ Appreducer,Authreducer})
const Store = legacy_createStore(rootreducer, applyMiddleware(thunk))

export default Store