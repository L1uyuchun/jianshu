import axios from "axios"
import * as constants from "./constants"

const loginIn  = () => ({
    type: constants.LOGININ
})
const loginOut = () => ({
    type: constants.LOGINOUT
})
export const loginInAction = (account, password) => {
    return (dispatch) => {
        return axios(`/api/login.json?account=${account}&password=${password}`).then(res => {
            dispatch(loginIn());
        })
    }
}
export const loginOutAction = () => {
    return (dispatch) => {
        return axios.get("/api/loginout.json").then(res => {
            dispatch(loginOut());
        })
    }
}


