import React,{Component,Children} from 'react';
import ReactDom,{render,findDOMNode} from 'react-dom';
import {Router,Route,hashHistory,browserHistory,IndexRoute,Redirect} from 'react-router';
import App from './container/App';
import Contact from './container/Contact';
import About from './container/About';
import Home from './container/Home';
//基础路由：
/*<Router history={hashHistory}>
 <Route path="/" component={App}></Route>
 <Route path="/contact" component={Contact}></Route>
 </Router>*/
const route=(
    //Router本身就是组件
    //路径不区分大小写
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="contact" component={Contact}></Route>
            <Route path="about/:a/:b" component={About}></Route>
            <Redirect from="about" to="about/react/123"/>
        </Route>
    </Router>
)

render(route,document.getElementById('app'));