/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import styles from './menuList.less'
import { Menu, Icon } from 'antd';
import {
    Link
} from 'react-router-dom';
import history from './../../pages/public/history';
const SubMenu = Menu.SubMenu;

class MenuList extends React.Component {
    constructor(arg) {
        super(arg);
    }
    state = {
        defaultSelectedKeys: [],
        defaultOpenKeys:[]
      };
    componentWillReceiveProps=(nextProps)=>{
        nextProps.menuList.map((item,i)=>{
            if(item.childrens){
                item.childrens.map((childItem)=>{
                    if(childItem.link==history.location.pathname){
                        this.setState({
                            defaultSelectedKeys: [childItem.id],
                            defaultOpenKeys:[item.id]
                        })
                    }
                })
            }else if(item.link==history.location.pathname){
                this.setState({
                    defaultSelectedKeys: [item.id]
                })
            }
        })
    }
    handleOpenMenu=(e)=>{
        this.setState({
            defaultOpenKeys:e
        })
    }
    render() {
        return (
            <Menu theme="dark" mode="inline" onOpenChange={this.handleOpenMenu} selectedKeys={this.state.defaultSelectedKeys} openKeys={this.state.defaultOpenKeys}>
            {this.props.menuList.map((item,i)=>{
                if(item.childrens){
             return  <SubMenu
             
             key={item.id}
             title={<span><Icon type="user" /><span>{item.title}</span></span>}
           >
           {item.childrens.map((childItem,i)=>{
               return <Menu.Item  key={childItem.id}>
               <Link to={childItem.link}>{childItem.title}</Link></Menu.Item>
           })}
           </SubMenu>
                }else{
                    return <Menu.Item key={item.id}>
                    <Link to={item.link}>
                    <Icon type="user" />
                    <span >{item.title}</span>
                    </Link>
                  </Menu.Item>
                }
            })} 
          </Menu>  
        )
    }
}



export default MenuList;