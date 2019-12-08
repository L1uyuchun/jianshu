import * as constans from "./constant"
import { fromJS } from "immutable";

let defaultState = fromJS({
    articleList: [],
    page : 0
})
const reducer = (state = defaultState, action ) => {
    switch (action.type) {
        case constans.HOME_LIST:
            return state.set("articleList",fromJS(action.data));
        case constans.HOME_MORE_LIST:
            return state.merge({
                "articleList":fromJS([...state.get("articleList"),...action.data.data]),
                "page": fromJS(action.data.page)
            });
        default:
            return state;
    }
}
export default reducer;
