import { combineReducers } from "redux";
import registerReducer from "./register/registerReducer";

const rootReducer=combineReducers({
    registerReducer:registerReducer,
})

export default rootReducer