import { combineReducers } from "redux"
import authReducer from "./Auth"
import lazyReducer from "./Lazy"


const rootReducer = combineReducers({
    authReducer,lazyReducer
})

export default rootReducer