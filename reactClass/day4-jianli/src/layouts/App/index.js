import React from "react";
import {Link} from 'react-router';
import MenuList from '../Menu';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.css';
export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            collapse:true
        }
    }
    changeCollapse(){
        this.setState({
            collapse:!this.state.collapse
        })
    }
    render(){
        var collapse=this.state.collapse;
        return (
            <div className="appWrap">
                {/*导航菜单*/}
                <div className="app-menu">
                    <MenuList collapse={collapse} changeCollapse={this.changeCollapse.bind(this)}/>
                </div>
                {/*模块内容展示区*/}

                <div className={collapse?"app-container app-container-collapse":"app-container"}>
                    <ReactCSSTransitionGroup
                        className="app"
                        component="div"
                        transitionName="app"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}
                    >
                    <div className="innerContainer" key={this.props.location.pathname}>
                        {this.props.children}
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}