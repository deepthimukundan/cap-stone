import { POST_REG_INFO } from "./registerTypes"

export const registerAction = (employeedata) => {
    console.log(employeedata)
  return {
    payload: employeedata,
    type: POST_REG_INFO,
  }
}