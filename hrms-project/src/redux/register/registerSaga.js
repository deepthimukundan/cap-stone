import axios from 'axios';
import { takeEvery, call, put } from "redux-saga/effects";
import { POST_REG_INFO, POST_REG_INFO_SUCCESS } from "./registerTypes";

function* postregister(action) {
    try{
       const response= yield call(axios.post, "http://localhost:8001/employee", action.payload) 
       console.log("reg res",response)
       yield put({type: POST_REG_INFO_SUCCESS, response: response.data});
    }
    catch(e) { console.log('error', e) }
}

export function* watchEmpRegisterContainer(){
    yield takeEvery(POST_REG_INFO, postregister)
}
