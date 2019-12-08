import React, { PureComponent } from "react";
import { connect } from "react-redux"
import {
    LoginWrapper,
    LoginBox
} from "./style"
import { actionCreators } from "./store/index"
import { Redirect } from "react-router-dom"


class Login extends PureComponent{
    // constructor(props) {
    //     super(props);
    // };
    render() {
        let { login_status, loginIn } = this.props;

        {
            if(!login_status) {
                return (<LoginWrapper>
                    <LoginBox>
                        <input
                            type="text"
                            placeholder="账号"
                            className="margin-bottom-20"
                            ref={ (element)  => { this.accountInput=element} }
                        />
                        <input
                            type="password"
                            placeholder="密码"
                            className="margin-bottom-20"
                            ref={ el => {this.passwordInput=el} }
                        />
                        <button onClick={ () => { loginIn(this.accountInput,this.passwordInput)} }>登录</button>
                    </LoginBox>
                </LoginWrapper>)
            }else {
                return (<Redirect to="/" />)
            }

        }

    };
}
const mapState = (state) => {
     return {
         login_status: state.get("loginReducer").get("login"),
     }
}

const mapDispatch = (dispatch) => {
      return {
          loginIn(el1, el2) {
              let account = el1.value;
              let password = el2.value;
              if(!account||!password) {
                  alert(`请输入${account ? "密码": "账号"}`);
                  return ;
              }

              dispatch(actionCreators.loginInAction(account, password));


          }
      }
}
export default connect(mapState, mapDispatch)(Login);