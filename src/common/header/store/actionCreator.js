import  * as constant from "./constant"
import axios from "axios"
import  { fromJS } from "immutable";

const getListAction = (data,allPage) => {
    return {
        type: constant.HOT_LIST,
        data:fromJS(data),
        allPage,
    }
}

export const searchFocused = (data) => ({type: constant.SEARCH_FOCUSED});
export const searchLosed = () => ({ type: constant.SEARCH_LOSED });
export const getHotSearch = (dispatch) => {
    return axios.get("/api/header.json")
        .then(res => {
            let allPage = Math.ceil(res.data.data.length/10);
            dispatch(getListAction(res.data.data,allPage));
        }).catch(err => {
            dispatch(getListAction([]));
        })
}
export const changeHotWordPageAction = (currentPage, allPage) => {
    if(currentPage < allPage) {
        return {
            type: constant.CHANGE_PAGE,
            page:currentPage + 1,
        }
    }else {
        return {
            type: constant.CHANGE_PAGE,
            page: 1,
        }
    }
}
export const mouseEnterAction = () => {
    return {
        type: constant.MOUSE_ENTER,
    }
};
export const mouseLeaveAction = () => {
    return {
        type: constant.MOUSE_LEAVE
    }
}
