import React from "react"
import { Redirect } from "react-router-dom"
import * as constants from "./constants"
import { fromJS } from "immutable"

let initState = fromJS({
    login:false,
});

 const reducer = (state = initState, action) => {
     switch (action.type) {
         case constants.LOGININ:
             return state.set("login", true);
         case constants.LOGINOUT:
             return state.set("login", false);
     }
    return state;
}
export default reducer