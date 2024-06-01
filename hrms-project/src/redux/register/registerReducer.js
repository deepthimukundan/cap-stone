import { POST_REG_INFO_SUCCESS } from "./registerTypes"

const empState= {
    employeedata:[],
    regSuccessAuth: false
}
const registerReducer = (state= empState, action) => {
    switch(action.type){
        case POST_REG_INFO_SUCCESS:
            return{
                ...state,
                emp:action.response,
                regSuccessAuth:true
            }
        default: return state
    }
}

export default registerReducer