import React, { PureComponent } from "react";
import {
    HomeWrapper,
    LeftWrapper,
    RightWrapper,
    ScrollTop
} from "./style"
import LeftList from "./views/LeftList"
import RightList from "./views/RightList"

class  Home extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            scrollDistence:0,
            isShowScrollToTopBtn:false,
        }
    };
    componentDidMount() {
        window.onscroll = this.changeScroll.bind(this);
    }

    render() {
        return (
            <HomeWrapper>
                <LeftWrapper>
                    <LeftList></LeftList>
                </LeftWrapper>
                <RightWrapper>
                    <RightList></RightList>
                </RightWrapper>
                { this.state.isShowScrollToTopBtn
                    ? <ScrollTop onClick={ this.scollToTop.bind(this) }>回到顶部</ScrollTop>:null }

            </HomeWrapper>
        )
    };
    scollToTop() {
        window.scrollTo(0,0);
    };
    changeScroll(e) {
        let topDis = document.documentElement.scrollTop
        if(topDis >= 200) {
            this.setState({
                isShowScrollToTopBtn: true,
            })
        }else {

            this.setState({
                isShowScrollToTopBtn: false,
            })
        }
    }
}
export default Home;
