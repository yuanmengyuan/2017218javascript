import React,{Component} from 'react';
import ReactDom,{render,findDOMNode} from 'react-dom';

import Header from './component/Header';
import Footer from './component/Footer';
import Range from './component/Range';

class Index extends Component{
    constructor(){
        super();
        this.state={
            a:0,
            b:0,
            c:0
        }
    }
    getEle=()=>{
        console.log(this.refs.h)
    }
    update(e){
        //如何通过refs获取react的DOM组件或元素；通过"findDONNode"拿到该组件的元素节点
        this.setState({
            a:findDOMNode(this.refs.one).value,
            b:findDOMNode(this.refs.two).value,
            c:findDOMNode(this.refs.three).value
        })
    }
    render(){
        return(
            <div>
                <h1 ref="h" onClick={this.getEle}>路上看到减肥路上看到减肥</h1>
                <Range ref="one" update={this.update.bind(this)}/>{this.state.a}
                <Range ref="two" update={this.update.bind(this)}/>{this.state.b}
                <Range ref="three" update={this.update.bind(this)}/>{this.state.c}
                <Header context="hello！ymy!"></Header>
                <Footer/>
            </div>
        )
    }
}
/*const Index=()=>(
    <div>
        <Range/>{}
        <Header context="hello！ymy!"></Header>
        <Footer/>
    </div>
)*/
render(<Index/>,document.getElementById('app'));