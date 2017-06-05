import React from 'react';

import './index.css';
export default  class Header extends  React.Component{
    constructor(){
        super();
        this.state={
            login:false
        }
    }
    changeLogin=(e)=>{
        //console.log(e.target.innerHTML)
        this.setState({
            login:!this.state.login
        })

    }
    render(){
        //登录之后，显示欢迎谁，没登录，先登录
        let str='';
        if(this.state.login){
            str='欢迎你！ymy'
        }else{
            str='没登录，先登录'
        }
        /*setTimeout(()=> {
            this.setState({
                login:true
            })
        },1000)*/
        return (
            <div id="header">
                {/*我是注释*/}
                <h1 onClick={this.changeLogin}>{str}</h1>
                <p>{this.props.content}</p>
            </div>
        )
    }
}