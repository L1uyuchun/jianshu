import React, { PureComponent } from "react";
import { connect } from "react-redux"
import {
    ListContent,
    ListItem,
    ReadMore
} from "../style"
import  { actionCreators } from "../store/index"
import { Link } from "react-router-dom"


class  LeftList extends PureComponent{
    render() {
        let { articleList, getMoreHomeList, page } = this.props;
        return (
            <ListContent>
                {
                    articleList.toJS().map((item,index) => {
                        return (
                            <ListItem key = {index}>
                                <Link to="/detail">
                                   <p className="title">{item.title}</p>
                                </Link>
                                <p className="item-content">{item.title}</p>
                                <p className="article-info">
                                    <span className="star info-icon">{item.diamondNum}</span>
                                    <span className="author info-icon">{item.author}</span>
                                    <span className="opinion info-icon">{item.opinion}</span>
                                    <span className="praise info-icon">{item.priase}</span>
                                    <span className="give info-icon">{item.giveMoney}</span>
                                </p>
                                <img src={item.imgSrc} className="item-img" alt="加载中"/>
                            </ListItem>
                        )
                    })
                }
                <ReadMore onClick={ () => getMoreHomeList(page) }>阅读更多</ReadMore>


            </ListContent>
        )
    };
    componentDidMount() {
        this.props.getList();
    }

}
const mapState = (state) => {
    return {
        articleList: state.get("homeReducer").get("articleList"),
        page: state.get("homeReducer").get("page"),
    }
}
const mapDispatch = (dispatch) => {
    return {
        getList() {
            actionCreators.getHomeList(dispatch);
        },
        getMoreHomeList(page) {
             let action = actionCreators.getMoreList(page);
            dispatch(action);  //此处提交了一个函数给，会自动调用action函数
            // console.log(123);
        }
    }
}

export default connect(mapState,mapDispatch)(LeftList)
