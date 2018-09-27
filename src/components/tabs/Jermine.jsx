/**
 * Created by zengtao on 2017/11/7.
 */
/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import { Button, Input, Alert } from 'antd';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions";
import { mapstate } from "../../reducers/shuju"
import Head from '../public/head'
import {
    Link
} from 'react-router-dom';
import jermineLogo from "../../images/jermine.jpg"

class Jermine extends React.Component {
    constructor(arg) {
        super(arg);

    }

    componentWillMount = () => {
    }

    render() {
        return (
            <div className="home">
               <img src={jermineLogo} alt=""/>
            <p>
            Hello Jermine
            </p>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Jermine);