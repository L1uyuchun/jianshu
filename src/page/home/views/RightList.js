import React, { PureComponent } from "react";
import {
    AboutJianshu
} from "../style"
import {  Link  } from "react-router-dom"


class RightList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
                "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
                "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
                "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
            ]
        }
    }
    render() {
        return (
            <AboutJianshu>
                {
                   this.state.list.map((item, index) => {
                       return (
                           <Link key={index} to="/" className="display-box">
                               <img src={item} className="jianshu-img" alt="加载中" />
                           </Link>
                       )
                   })
                }
            </AboutJianshu>

        )
    }

}
export default RightList;
