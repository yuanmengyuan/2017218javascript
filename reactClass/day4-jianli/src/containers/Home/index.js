import React from 'react';

import './index.css';
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="home-avatar">
                    <img src="https://avatars0.githubusercontent.com/u/13097660?v=3" alt=""/>
                    <p>圆梦源前端培训创始人</p>
                </div>
                <div className="home-content">
                    曾先后就职中国银行，新浪网，宜信等大型企业，先后负责过技术平台开发工作，以及银行内部系统等大型企业级SAAS应用的前端架构工作，实战经验丰富，同时，从事传授IT教学经验多年，拥有丰富的教学经验，主张复杂知识简单化；在前端工程化实现，Nodejs应用开发，React技术研究，移动端开发等方向有丰富的工作经验，并热衷于线下的技术分享和交流；
                </div>
            </div>
        )
    }
}