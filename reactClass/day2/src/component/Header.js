import React,{Component} from 'react';
import propTypes from 'prop-types';

import './header.css';
export default class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <h1>我是header部分</h1>
        )
    }
}
//子组件对父组件给其传参数类型的规定
Header.propTypes={
    context:propTypes.string,//要求context必须是字符串类型
    age:propTypes.number.isRequired///age必须是number数据类型
};
//设置属性的默认值；即告诉父集，这里的参数可传可不传
Header.defaultProps={
    age:8,
    context:'哈哈哈😄'
};