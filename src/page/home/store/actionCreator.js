import axios from "axios";
import * as constans from "./constant"

const listAction = (data) => {
    return {
        type:constans.HOME_LIST,
        data,
    }
}
const moreListAction = (data, page) => {
    return {
        type:constans.HOME_MORE_LIST,
        data:{
            data,
            page,
        }
    }
}


export const getHomeList = (dispatch) => {
       return axios.get("api/articlelist.json")
            .then(res => {
                if(res.data) {
                    dispatch(listAction(res.data));
                }
            })

}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get("api/articleMoreList.json?page="+(page+1))
            .then(res => {
                dispatch(moreListAction(res.data, page+1));
            })
    }
}


