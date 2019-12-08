import axios from "axios"
import { constants } from "./index"

const detailsListAction = (data) => ({
    type: constants.DETAILSlIST,
    data
})

export const ArticleDetails = () => {
    return (dispatch) => {
        axios.get("/api/details.json").then(res => {
            if(res.data.success) {
                dispatch(detailsListAction(res.data.list));
            }
        })
    }
}