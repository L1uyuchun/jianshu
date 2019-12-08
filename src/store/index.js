import { createStore, applyMiddleware } from "redux"
import { combineReducers } from "redux-immutable"
import { reducer as headerReducer } from "../common/header/store/index"
import  { homeReducer } from "../page/home/store/index"
import { detailsReducer } from "../page/details/store/index"
import { loginReducer } from "../page/login/store/index"
import thunk from "redux-thunk"

const reducer = combineReducers({
    headerReducer,
    homeReducer,
    detailsReducer,
    loginReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
export default store;
