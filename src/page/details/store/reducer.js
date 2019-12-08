
import { fromJS } from "immutable";
import { constants } from "./index"

const initState = fromJS({
    list:[],
    title:"从诱杀水浒名将的宋朝知府，到统治中原的开国皇帝，他仅用了2年",
    content:"金国灭掉北宋后，面对广袤富庶、人口众多的中原，因自身缺乏统治经验，于是先后立了两个“儿皇帝”，作为他们的代理人,一个是张邦昌,他当了32天的大楚皇帝,就自己主动跑到宋高宗赵构那里认错,结果被宋高宗赐死;“水浒名将”的书生，开始了自己“辉煌”的8年“宋奸”生涯。\n1,刘豫何许人也提到刘豫,必现提到与他相关的一位水浒英雄人物，那就是“大刀”关胜。关胜在水浒传中是关羽的嫡系子孙，长相武艺与祖上颇为相似，后任济南守将，坚决抗金。\n而同时为济南知府的刘豫,却一心叛敌。1128年，金兵围困济南城，他设计诱杀了关胜，献城投降。因为其“优异表现”，获得了金人的充分肯定，在张邦昌死后，1130年，金人决定由刘豫充当“大齐”皇帝，建都开封，继续为金人稳固中原充当傀儡。"
})

 const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case constants.DETAILSlIST:
               return state.set("list",fromJS(action.data))
        default:
            return state;
    }
}
export default detailsReducer