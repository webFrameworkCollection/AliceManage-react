/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions";
import { mapstate } from "../../reducers/index"
import {
    Link
} from 'react-router-dom';
import styles from './login.less'
import Card from "./../../components/card/card"
import { Checkbox } from 'antd';
class Login extends React.Component {
    constructor(arg) {
        super(arg);

    }

    componentWillMount = () => {

    }

    

    render() {
        //这里使用了嵌套路由，看不懂的，可以仔细的研究一下，对着我的写法做几次，就能理解了，不是很难
        return (
            <div className={styles.root}>
            <div className="loginBox">
            <Card title="Alice 综合管理系统">
            <div className="inputBox">
            <label >用户名</label>
            <input placeholder="用户名"/>
            </div>
            <div className="inputBox">
            <label>密码</label>
            <input placeholder="密码"/>
            </div>
            <div>
                <label>
                <Checkbox></Checkbox>
                <span className="remberPwd">记住密码</span>
                </label>
                <a className="forgotPwd">忘记密码？</a>
            </div>
            <div className="btnBox">
            <button className="btn btn-primary">登录</button>
            </div>
            </Card>
            </div>
            
            
             
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Login);