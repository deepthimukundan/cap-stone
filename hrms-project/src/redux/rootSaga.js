import { all } from "redux-saga/effects";
import { watchEmpRegisterContainer } from "./register/registerSaga";

export function* rootSaga(){
    yield all([
        watchEmpRegisterContainer(),
    ])
}