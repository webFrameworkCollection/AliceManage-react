/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import {Table,Modal,Button} from 'antd';
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as index_act from "../../actions";
import {mapstate} from "../../reducers/index"
import {qus} from 'esn'


class List extends React.PureComponent {
    constructor(arg) {
        super(arg);
    }

    componentWillMount = ()=> {
        // this.props.get('/list',{r:'0.7153214477881407'},(data)=>{
        //     this.props.act_list(data.data.msg.newlist)
        // })
    }

    render() {
        let list = this.props.red_list.map((data,index)=>(
            <div key={index}>
                
                <div>{data.name}</div>
            </div>))
        return (
            <div>
                <div className="neiye">
                    <h1>从reducers里面获取的数据</h1>
                    <h3 className="hongzi">{qus('parameter')}</h3>
                </div>
                <div className="list">
                    {list}
                </div>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(List);