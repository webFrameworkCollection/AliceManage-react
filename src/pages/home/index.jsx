/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions/menu";
import { mapstate } from "../../reducers/index"
import history from '../public/history';
import {cuns} from 'esn';
import { Layout, Icon } from 'antd';
import styles from "./index.less";
import MenuList from "./../../components/menuList/menuList"
const { Header, Sider, Content } = Layout;

class Index extends React.Component {
    constructor(arg) {
        super(arg);

    }
    state = {
        collapsed: false,
      };
     
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
      componentDidMount = () => {
      this.props.getMenu();
    }
    componentWillMount=()=>{
// console.log("into")
    }
    goList=()=>{
        //这是现阶段router4使用点击跳转的方式，cuns是esn的一个sessionstorage的存储，这样存储的好处是，刷新页面也不会丢失
        cuns('parameter',"参数1");
        history.push('/pageList');
    }
    handleChangeText = (e) => {
        this.props.getMenu();
    }

    render() {
        //这里使用了嵌套路由，看不懂的，可以仔细的研究一下，对着我的写法做几次，就能理解了，不是很难
        return (
            <Layout className={styles.root}>
            <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
             <div className="logo">
          Alice-admin
          </div>
          </Header>
          <Layout>
        <Sider
        className="menuSmall"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
        <div className="suportBtn">
        <button className='btn btn-success '>
        <Icon className="suportIcon" type="github" theme="outlined" />
        {this.state.collapsed?'':'support me'}</button>
        </div>
         
          <MenuList menuList={this.props.menuList}></MenuList>
        </Sider>
        <Layout>
          
          <Content className="content">
          <div>
                    {this.props.children}
          </div>
         
          </Content>
        </Layout>
        </Layout>
      </Layout>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Index);