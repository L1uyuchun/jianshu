import React, { PureComponent, Fragment  } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store/index"
import { withRouter } from "react-router-dom"


import {
    DetailLeftWrapper,
    ArticleTitle,
    ArticleText
} from "../style"

class DetailsLeft extends PureComponent{
    render() {
        let { title, content, list } = this.props;
        return (
            <DetailLeftWrapper>
                {
                    list.toJS().map((item,index) => {
                        return (
                            <Fragment key={index}>
                                <ArticleTitle>
                                    { item.title }
                                </ArticleTitle>
                                <ArticleText>
                                    { item.content }
                                </ArticleText>
                            </Fragment>
                        )
                    })
                }

            </DetailLeftWrapper>
        )
    }

    componentDidMount() {
        this.props.getArticleDetails();
    }
}
const mapState = (state) => ({
    list:state.getIn(["detailsReducer", "list"]),
    title: state.getIn(["detailsReducer", "title"]),
    content: state.getIn(["detailsReducer", "content"])
})
const mapDispath = (dispatch) => ({
    getArticleDetails() {
        let action = actionCreators.ArticleDetails();
        dispatch(action);
    }
})
export default connect(mapState, mapDispath)(withRouter(DetailsLeft));