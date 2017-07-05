import React from 'react';
import{Row,Col} from 'antd';

import "./index.css";
export default class About extends React.Component{
    showAboutItem(data){
        return data.map(info=>(
            <div className="about-item">
                <i className={info.icon}></i>
                <div>
                    <div className="name">{info.name}</div>
                    <div className="dsc">{info.msg}</div>
                </div>
            </div>
        ))
    }
    render(){
        var data=[
            {icon:"iconfont icon-age",name:"年龄",msg:"29"},
            {icon:"iconfont icon-sex",name:"性别",msg:"女"},
            {icon:"iconfont icon-University",name:"所在公司",msg:"中国银行网络部"},
            {icon:"iconfont icon-age",name:"年龄",msg:"29"},
            {icon:"iconfont icon-age",name:"年龄",msg:"29"},
            {icon:"iconfont icon-age",name:"年龄",msg:"29"},
            {icon:"iconfont icon-age",name:"年龄",msg:"29"},
            {icon:"iconfont icon-age",name:"年龄",msg:"29"},
            {icon:"iconfont icon-age",name:"年龄",msg:"29"}
        ]
        return(
            <div className="about">
                <h1>关于我</h1>
                <div className="about-container">
                    {this.showAboutItem(data)}

                </div>
            </div>
        )
    }
}