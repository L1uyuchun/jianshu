import React, { PureComponent } from "react"
import { CSSTransition } from 'react-transition-group';
import  { connect } from "react-redux";
import { actionCreators } from "./store"
import { loginOutAction } from "../../page/login/store/actionCreators"
import { Link } from "react-router-dom"

import {
    HeaderWrapper,
    Logo,
    HeaderContent,
    NavItem,
    SearchItem,
    InputItem,
    Addition,
    Nav,
    HotSearch
} from "./style"




class Header extends PureComponent{
    constructor(props) {
        super(props);
        this.spinIcon =  null;
    };
    render() {
        let { focused, inputGetFocus, hotList, login, inputBlur, loginEvent, loginOut } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo></Logo>
                </Link>

                <HeaderContent>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <SearchItem>
                        <CSSTransition
                            in = {focused}
                            timeout = {200}
                            classNames="slide"
                        >
                            <InputItem
                                className= {focused ? "focused" : ""}
                                onFocus= {() => { inputGetFocus(hotList)} }
                                onBlur = {inputBlur}
                            ></InputItem>
                        </CSSTransition>
                        <i
                            className={focused ? "focused iconfont zoom":"iconfont zoom"}
                        >&#xe60d;</i>
                        { this.hotSearch(focused) }
                    </SearchItem>
                    <NavItem className="right pointer">
                        {
                            login ?  <span onClick={loginOut}>退出</span> : <Link to="/login">登录</Link>
                        }
                    </NavItem>
                    <NavItem className="right betaImg"></NavItem>
                    <NavItem className="right">Aa</NavItem>
                </HeaderContent>
                <Addition>
                    <Nav className="register">注册</Nav>
                    <Nav className="write">
                        <i className="iconfont">&#xe600;</i>
                        写文章
                    </Nav>
                </Addition>
            </HeaderWrapper>
            // /api/header.json
        )
    };
    hotSearch ()  {
        let {
            focused,
            hotList,
            currentPage,
            allPage,
            changeHotWordPage,
            mouseEnter,
            mouseLeave,
            mouseIn
        } = this.props;
        if(focused || mouseIn) {
            let currentPageHotWord = [];
            if(hotList.size > 0) {
                for(let i = (currentPage-1) * 10;i < currentPage * 10;i++ ) {
                    let newList = hotList.toJS();
                    if(newList&&newList.length) {
                        currentPageHotWord.push(newList[i]);
                    }
                }
            }
            return (
                <HotSearch  onMouseEnter = { mouseEnter } onMouseLeave = { mouseLeave }>
                    <p className="title">
                        <span className="left">热门搜索</span>
                        <span
                            className="right"
                            onClick = {() => { changeHotWordPage(currentPage, allPage, this.spinIcon) }}
                        ><i
                            className="iconfont spin"
                            ref={(icon) => {this.spinIcon = icon}}
                        >&#xe851;</i>换一批</span>
                    </p>
                    <div className="hot-content">
                        {
                            currentPageHotWord.map((item,index) => {
                               return (<p className='item' key={item}>{item}</p>)
                            })
                        }
                    </div>
                </HotSearch>
            )
        }else {
            return null;
        }

    }


}
const mapStateToProps = (state) => {
    return {
        focused: state.get("headerReducer").get("focused"),
        hotList: state.get("headerReducer").get("hotList"),
        currentPage: state.get("headerReducer").get("currentPage"),
        allPage: state.get("headerReducer").get("allPage"),
        mouseIn: state.get("headerReducer").get("mouseIn"),
        login: state.get("loginReducer").get("login")
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        inputGetFocus(list) {
            //获得焦点的时候去请求数据，用redux-thunk请求数据。
            if(list.size === 0) {
                actionCreators.getHotSearch(dispatch);
            }
            dispatch(actionCreators.searchFocused());
        },
        inputBlur() {
          dispatch(actionCreators.searchLosed());
        },
        changeHotWordPage(changeHotWordPage, allPage, icon) {
            let deg = 0;
            if(icon.style.transform) {
                deg = icon.style.transform.replace(/[^0-9]/ig,"");
            }else {
                deg = 0;
            }
            icon.style.transform = `rotate(${parseInt(deg)+360}deg)`;
            dispatch(actionCreators.changeHotWordPageAction(changeHotWordPage,allPage));
        },
        mouseEnter() {
          dispatch(actionCreators.mouseEnterAction());
        },
        mouseLeave() {
            dispatch(actionCreators.mouseLeaveAction());
        },
        loginOut() {
            dispatch(loginOutAction());
        }


    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
