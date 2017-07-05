import React from 'react';
import {Link,IndexLink,browserHistory} from 'react-router';
import propTypes from 'prop-types';

import './App.css'
export default class App extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        var username=e.target.elements[0].value;
        var password=e.target.elements[1].value;
        var path=`about/${username}/${password}`;
       //2:路由切换 browserHistory.push(path);
        //3：this.context
        this.context.router.push(path);
        console.log(this.context)
    }
    handlClick(){
        this.context.router.goBack();
    }
    render(){
        return(
            <div className="app">
                <h1>我是列表菜单</h1>
                <ul>
                    <li>
                        {/*默认激活的路由*/}
                        <IndexLink to="/" activeClassName="current">首页</IndexLink>
                    </li>
                    <li>
                        <Link to="contact" activeClassName="current">contact联系我们</Link>
                    </li>
                    <li>
                        <Link to="about" activeClassName="current">about关于我们</Link>
                    </li>
                    <li>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <p>
                                用户名：<input type="text" name="username"/>
                            </p>
                            <p>
                                密码：<input type="password" name="password"/>
                            </p>
                            <input type="submit" value="提交数据"/>
                            <input type="button" value="回退功能" onClick={()=>{browserHistory.goBack()}}/>
                        </form>
                    </li>
                </ul>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
App.contextTypes={
    router:propTypes.object
}