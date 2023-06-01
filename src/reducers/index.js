import { combineReducers } from "redux"
import authReducer from "./Auth"
import lazyReducer from "./Lazy"
import movieReducer from "./Movie"

const rootReducer = combineReducers({
    authReducer,lazyReducer,movieReducer
})

export default rootReducer