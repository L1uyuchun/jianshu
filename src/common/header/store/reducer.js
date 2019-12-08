import  * as constant from "./constant"
import  { fromJS }  from "immutable"

let defultState = fromJS({
    focused:false,
    hotList:[],
    currentPage:1,
    allPage:0,
    mouseIn: false,
});

const reducer = (state = defultState, action) =>{
    switch (action.type) {
        case constant.SEARCH_FOCUSED:
            return state.set("focused",true);
        case constant.SEARCH_LOSED:
            return state.set("focused",false);
        case constant.HOT_LIST:
            return state.merge({
                hotList: action.data,
                allPage: action.allPage
            })
        case constant.CHANGE_PAGE:
            return state.set("currentPage",action.page);
        case constant.MOUSE_ENTER:
            return state.set("mouseIn",true);
        case constant.MOUSE_LEAVE:
            return state.set("mouseIn",false);
        default:
            return state;

    }
}
export default reducer;
