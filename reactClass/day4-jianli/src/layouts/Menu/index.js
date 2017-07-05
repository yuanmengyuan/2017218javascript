import React from 'react';
import {Link} from 'react-router';
import { Menu, Icon } from 'antd';

import './index.css';
export default class MenuList extends React.Component{
    showMenuItem(data){
        var {collapse}=this.props;
        return data.map(info=>(
            <Menu.Item key={info.path}>
                <Link to={info.path=="index"?"/":"/"+info.path} className="menu-item">
                    <i className={"iconfont icon-"+info.path}></i>
                    {collapse?"":<span>{info.name}</span>}
                </Link>
            </Menu.Item>
        ))
    }
    render(){
        var data=[
            {"path":"index","name":"首页"},
            {"path":"about","name":"关于我"},
            {"path":"skill","name":"工作技能"},
            {"path":"project","name":"项目经验"},
            {"path":"contact","name":"联系我吧"}
        ];
        var {collapse,changeCollapse}=this.props;
        return(
            <div className={collapse?"menu menu-collapse":"menu"}>
                <div className={collapse?"menu-jianli menu-jianli-collapse":"menu-jianli"}>
                    <i className="iconfont icon-jianli"></i>
                    {collapse?"":"张蕾"}
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["index"]}
                    theme="dark"
                >
                    {this.showMenuItem(data)}
                </Menu>
                <div className={collapse?"menu-aside menu-aside-collapse":"menu-aside"} onClick={changeCollapse}>
                    <Icon type={collapse?"right":"left"}></Icon>
                </div>
            </div>
        )
    }
}